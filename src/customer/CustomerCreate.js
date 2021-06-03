import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { makeStyles } from "@material-ui/core/styles";
import { postAdress, postCustomer, upload } from "../data/api";
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

export function CustomerCreate() {
  const classes = useStyles();
  const [files, setfiles] = useState('');
  const [send, setSend] = useState(false);
  const redirect = useRedirect();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      idfirebase: "",
      phoneNumber: "",
      createdAt: Date,
      updatedAt: Date,
      address: "",
      email: "",
      image: "",
      street: "",
      city: "",
      postalCode: "",
    },
    onSubmit: (values) => {
      setSend(true);
      upload(files).then((respo) => {
        console.log(respo.data);
        // values.image = respo.data["@id"];
        // postAdress(values).then((resp) => {
        //   console.log(resp.data["@id"]);
        //   values.address = resp.data["@id"];
        //   postCustomer(values)
        //     .then((res) => {
        //       redirect("/customers");
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        // });
      });
    },
  });
  return (
    <div>
      <h1>Création d'un Customer</h1>
      <Card className={classes.bodyCard}>
        <CardContent>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => {
              setfiles(e.target.files);
              console.log(e.target.files)
            }}
            accept="image/png, image/jpeg"
          />
          <form onSubmit={formik.handleSubmit} className={classes.contentCard}>
            {/* <TextField
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

            <TextField
              id="idfirebase"
              name="idfirebase"
              label="idfirebase"
              value={formik.values.idfirebase}
              onChange={formik.handleChange}
              variant="filled"
              required
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
            /> */}

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
