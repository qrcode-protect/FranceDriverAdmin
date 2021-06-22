import React, { useState } from "react";
import { useFormik } from "formik";
import { List, Datagrid, TextField } from "react-admin";
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
import { postMessageCustomer } from "../data/api";

import SendIcon from "@material-ui/icons/Send";
import { sendMessage } from "../data/mercure";

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

export function MessageCustomerList(props) {
  const classes = useStyles();
  const [send, setSend] = useState(false);
  const refresh = useRefresh();
  const formik = useFormik({
    initialValues: {
      message: "",
      customerId: "",
      createdAt: Date,
    },
    onSubmit: (values) => {
      setSend(true);
      postMessageCustomer(values).then((responses) => {
        sendMessage().then((resp) => {
          console.log(resp);
        });
        setSend(false);
        refresh();
      });
    },
  });
  return (
    <div>
      <h1>Message Customer</h1>
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
                  <b>Application customer</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.details}>
                  <CustumTextField
                    id="customerId"
                    name="customerId"
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
          <TextField source="customerId" />
          <TextField source="createdAt" />
        </Datagrid>
      </List>
    </div>
  );
}
