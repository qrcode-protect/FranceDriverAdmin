import React, { useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import { useFormik } from "formik";
import { CustumTextField } from "../messageCustomer/CustumTextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useRefresh } from "react-admin";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { postMessageDriver } from "../data/api";

import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  details: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
    width: "40ch",
  },
  accordions: {
    width: "100%",
  },
  button: {
    marginTop: 20,
    marginRight: 100,
    marginLeft: 100,
  },
  CircularProgress: {
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export function MessageDriverList(props) {
  const classes = useStyles();
  const [send, setSend] = useState(false);
  const refresh = useRefresh();
  const formik = useFormik({
    initialValues: {
      message: "",
      driverId: "",
      createdAt: Date,
    },
    onSubmit: (values) => {
      setSend(true);
      postMessageDriver(values).then((response) => {
        setSend(false);
        refresh();
      });
    },
  });
  return (
    <div>
      <h1>Message Driver</h1>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.accordions}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Send a message</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.details}>
                  <CustumTextField
                    id="driverId"
                    name="driverId"
                    multiline
                    onChange={formik.handleChange}
                    placeholder="id driver "
                    variant="filled"
                  />
                  <CustumTextField
                    id="message"
                    name="message"
                    label="Multiline"
                    multiline
                    rows={10}
                    onChange={formik.handleChange}
                    placeholder="Quel message voulez vous envoyer"
                    variant="filled"
                  />
                  <CustumTextField
                    id="createdAt"
                    name="createdAt"
                    type="date"
                    value={formik.values.createdAt}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />

                  {!send ? (
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      className={classes.button}
                      startIcon={<SendIcon />}
                      type="submit"
                    >
                      Send
                    </Button>
                  ) : (
                    <div className={classes.CircularProgress}>
                      <CircularProgress />
                    </div>
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </form>
      </div>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="message" />
          <TextField source="driverId" />
          <TextField source="createdAt" />
        </Datagrid>
      </List>
    </div>
  );
}
