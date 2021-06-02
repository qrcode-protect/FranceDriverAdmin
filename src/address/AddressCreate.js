import React from "react";
import { useFormik, Formik, Field, Form } from "formik";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { postAdress } from "../data/api";
import { useRedirect } from "react-admin";

const useStyles = makeStyles((theme) => ({
  bodyCard: {
    width: 700,
  },
  button: {
    margin: 10,
  },
  contentCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-beetwen",
  },
}));

export function AddressCreate() {
  const classes = useStyles();
  const redirect = useRedirect();
  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      postalCode: "",
    },

    onSubmit: (values) => {
      postAdress(values)
        .then((res) => {
          redirect("/adresses");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return (
    <div>
      <h1>Création d'une adresse</h1>
      <form onSubmit={formik.handleSubmit}>
        <Card className={classes.bodyCard}>
          <CardContent className={classes.contentCard}>
            <TextField
              id="street"
              name="street"
              label="Street"
              value={formik.values.street}
              onChange={formik.handleChange}
            />

            <TextField
              id="city"
              name="city"
              label="City"
              value={formik.values.city}
              onChange={formik.handleChange}
            />

            <TextField
              id="postalCode"
              name="postalCode"
              label="PostalCode"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Save
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
