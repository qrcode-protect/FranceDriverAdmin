import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { VehicleTypeList } from "../vehicleType/VehicleTypeList";
import { useRedirect, useRefresh } from "react-admin";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { postGestion, postVehicleType } from "../data/api";

import SendIcon from "@material-ui/icons/Send";
import axios from "axios";

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

export function GestionList(props) {
  const classes = useStyles();
  const [send, setSend] = useState(false);
  const redirect = useRedirect();
  const refresh = useRefresh();
  // const listVehicleType = .map(()=><option>{}</option>)
  const formik = useFormik({
    initialValues: {
      driverMessage: "",
      customerMessage: "",
      vehicleType: "",
    },
    onSubmit: (values) => {
      setSend(true);
      axios
        .all([postGestion(values), postVehicleType(values)])
        .then((response) => {
          values.Gestion = response[0].data["@id"];
          values.VehicleType = response[1].data["@id"];
          setSend(false);
          refresh();
        });
    },
  });
  return (
    <div>
      <h1>Gestion</h1>

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
                  <b>Application driver</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.details}>
                  <TextField
                    id="driverMessage"
                    name="driverMessage"
                    label="Multiline"
                    multiline
                    rows={10}
                    onChange={formik.handleChange}
                    placeholder="Quel message voulez vous envoyer"
                    variant="filled"
                  />
                  {console.log(formik.values)}
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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Application customeur</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.details}>
                  <TextField
                    id="filled-multiline-static"
                    name="customerMessage"
                    label="Multiline"
                    multiline
                    rows={10}
                    onChange={formik.handleChange}
                    placeholder="Quel message voulez vous envoyer"
                    variant="filled"
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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Reglage admin</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.details}>
                  <h1>Hello</h1>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </form>
      </div>
    </div>
  );
}
