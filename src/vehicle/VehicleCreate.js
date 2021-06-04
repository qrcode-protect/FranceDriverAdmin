import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import IconContentAdd from "@material-ui/icons/Add";
import IconCancel from "@material-ui/icons/Cancel";
import IconSave from "@material-ui/icons/Save";
import { useFormik } from "formik";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { postVehicle, putDriver } from "../data/api";
import { useRedirect } from "react-admin";

const useStyles = makeStyles(() => ({
  contentForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "20rem",
  },
  contentButton: {
    justifyContent: "space-around",
    margin: "5px",
  },
}));

export function VehicleCreate({ driverId }) {
  const redirect = useRedirect();

  const [showDialog, setShowDialog] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setShowDialog(true);
  };
  const handleCloseClick = () => {
    setShowDialog(false);
  };

  const formik = useFormik({
    initialValues: {
      vehicleNumber: "",
      color: "",
      model: "",
      modelYear: "",
    },
    onSubmit: (values) => {
      postVehicle(values).then((response) => {
        putDriver(driverId, response.data["@id"]);
        redirect("/drivers");
      });
    },
  });
  return (
    <div>
      <Button onClick={handleClick} label="ra.action.create">
        <IconContentAdd />
      </Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="Create address"
      >
        <DialogTitle>Ajouter un Véhicule</DialogTitle>

        <DialogContent>
          <form onSubmit={formik.handleSubmit} className={classes.contentForm}>
            <TextField
              id="vehicleNumber"
              name="vehicleNumber"
              label="Plaque d'immatriculation"
              variant="filled"
              onChange={formik.handleChange}
              required
            />
            <TextField
              id="color"
              name="color"
              label="Couleur"
              variant="filled"
              onChange={formik.handleChange}
              required
            />

            <TextField
              id="model"
              name="model"
              label="Model"
              variant="filled"
              onChange={formik.handleChange}
              required
            />

            <TextField
              id="modelYear"
              name="modelYear"
              label="Année de première mise en circulation"
              onChange={formik.handleChange}
              variant="filled"
              required
            />
            <DialogActions className={classes.contentButton}>
              <Button label="save" type="submit">
                <IconSave />
              </Button>
              <Button label="ra.action.cancel" onClick={handleCloseClick}>
                <IconCancel />
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default VehicleCreate;
