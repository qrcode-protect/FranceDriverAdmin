import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { postAdress, postDriver, postDriverDoc, upload } from "../data/api";
import { useRedirect } from "react-admin";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import SaveIcon from "@material-ui/icons/Save";

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
  },
}));

export function GestionList() {
  const classes = useStyles();
  const [avatar, setAvatar] = useState("");
  const [send, setSend] = useState(false);
  const [files, setFiles] = useState([]);
  const redirect = useRedirect();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      status: Boolean,
      createdAt: Date,
      updatedAt: Date,
      avatar: "",
      address: "",
      street: "",
      city: "",
      postalCode: "",
      driverDoc: "",
    },
    onSubmit: (values) => {
      setSend(true);
      axios
        .all([upload(avatar), postAdress(values), postDriverDoc(files)])
        .then((response) => {
          values.avatar = response[0].data["@id"];
          values.address = response[1].data["@id"];
          values.driverDoc = response[2].data["@id"];
          postDriver(values);
          redirect("/drivers");
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
                    id="filled-multiline-static"
                    label="Multiline"
                    multiline
                    rows={10}
                    defaultValue="Quel message voulez vous envoyer"
                    variant="filled"
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    type="submit"
                  >
                    Save
                  </Button>
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
                    label="Multiline"
                    multiline
                    rows={10}
                    defaultValue="Quel message voulez vous envoyer"
                    variant="filled"
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    type="submit"
                  >
                    Save
                  </Button>
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
                  <TextField
                    id="filled-multiline-static"
                    label="Multiline"
                    multiline
                    rows={10}
                    defaultValue="Quel message voulez vous envoyer"
                    variant="filled"
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={classes.button}>
            {!send ? (
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                type="submit"
              >
                Save
              </Button>
            ) : (
              <div>
                <CircularProgress />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
