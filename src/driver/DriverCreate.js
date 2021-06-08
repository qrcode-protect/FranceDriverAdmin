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

export function DriverCreate() {
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
      <h1>Création d'un Driver</h1>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.accordions}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Informations</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.details}>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={(e) => {
                      console.log(e.target.files[0]);
                      setAvatar(e.target.files[0]);
                    }}
                    accept="image/png, image/jpeg"
                  />
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="FirstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="LastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />

                  <Switch
                    id="status"
                    name="status"
                    label="Status"
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    required
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />

                  <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />

                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />

                  <TextField
                    id="street"
                    name="street"
                    label="Street"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />

                  <TextField
                    id="city"
                    name="city"
                    label="City"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />

                  <TextField
                    id="postalCode"
                    name="postalCode"
                    label="Postal Code"
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />

                  <TextField
                    id="createdAt"
                    name="createdAt"
                    type="date"
                    value={formik.values.createdAt}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />

                  <TextField
                    id="updatedAt"
                    name="updatedAt"
                    type="date"
                    defaultValue="12-001-1989"
                    value={formik.values.updatedAt}
                    onChange={formik.handleChange}
                    variant="filled"
                    required
                  />
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>Documents</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <label for="identity">Identity: </label>
                  <input
                    id="identity"
                    type="file"
                    onChange={(e) => {
                      setFiles([...files, e.target.files[0]]);
                    }}
                    accept="file"
                  />
                  <label for="vtcCard">VtcCard: </label>

                  <input
                    id="vtcCard"
                    type="file"
                    onChange={(e) => {
                      setFiles([...files, e.target.files[0]]);
                    }}
                    accept="file"
                  />
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
