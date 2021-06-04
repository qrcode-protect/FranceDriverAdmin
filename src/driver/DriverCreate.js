import React, { useState } from "react";
import { useFormik } from "formik";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { postAdress, postDriver, postDriverDoc, upload } from "../data/api";
import { useRedirect } from "react-admin";

const useStyles = makeStyles((theme) => ({
  bodyCard: {
    width: 700,
  },
  button: {
    margin: 10,
  },
  contentCard: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
  },
  CircularProgress: {
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export function DriverCreate() {
  const classes = useStyles();
  const [files, setfiles] = useState("");
  const [send, setSend] = useState(false);
  const [identity, setidentity] = useState("");
  const [vtcCard, setvtcCard] = useState("");
  const redirect = useRedirect();

  function sendFiles() {
    console.log("send");
    upload(identity).then((response) => {
      postDriverDoc(response.data["@id"]);
      console.log(response);
    });
  }

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
      upload(files).then((resFiles) => {
        values.avatar = resFiles.data["@id"];
        postAdress(values).then((resPostAdress) => {
          values.address = resPostAdress.data["@id"];
          postDriverDoc(identity, vtcCard).then((resPostDriverDoc) => {
            values.driverDoc = resPostDriverDoc.data["@id"];
            postDriver(values)
              .then((response) => {
                redirect("/drivers");
              })
              .catch((error) => {
                console.log(error);
              });
          });
        });
      });
    },
  });
  return (
    <div>
      <h1>Création d'un Driver</h1>
      <Card className={classes.bodyCard}>
        <CardContent>
          <input
            type="file"
            id="avatar"
            name="avatar"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setfiles(e.target.files[0]);
            }}
            accept="image/png, image/jpeg"
          />

          <form onSubmit={formik.handleSubmit} className={classes.contentCard}>
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

            <h1> Ajouter un Document </h1>

            <input
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setidentity(e.target.files[0]);
              }}
              accept="file"
            />
            <input
              type="file"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setvtcCard(e.target.files[0]);
              }}
              accept="file"
            />

            {!send ? (
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.button}
              >
                Save
              </Button>
            ) : (
              <div className={classes.CircularProgress}>
                <CircularProgress />
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
