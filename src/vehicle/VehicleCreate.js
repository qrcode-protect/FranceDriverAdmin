import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import IconContentAdd from "@material-ui/icons/Add";
import IconCancel from "@material-ui/icons/Cancel";
import IconSave from "@material-ui/icons/Save";
import { useFormik } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { postVehicleDoc, postVehicle, putDriver, upload } from "../data/api";
import { useRedirect } from "react-admin";
import axios from "axios";

const useStyles = makeStyles(() => ({
  contentForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "40rem",
  },
  contentButton: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px",
  },
  contentButtonP: {
    margin: "5px",
    paddingRight: "10px",
  },
  contentButtonCancel: {
    background: "red",
    "&:hover, &:focus": {
      background: "red",
    },
  },
  CircularProgress: {
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export function VehicleCreate({ driverId }) {
  const classes = useStyles();
  const redirect = useRedirect();
  const [showDialog, setShowDialog] = useState(false);
  const [send, setSend] = useState(false);
  const [files, setFiles] = useState([]);
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
      vehicleDoc: "",
    },

    onSubmit: (values) => {
      setSend(true);
      axios.all([postVehicleDoc(files)]).then((response) => {
        console.log("yo");
        values.vehicleDoc = response[0].data["@id"];
        putDriver(driverId, response.data["@id"]);
        postVehicle(values);
        redirect("/drivers");
      });
    },
    // onSubmit: (values) => {
    //   setSend(true);
    //   postVehicle(values).then((response) => {
    //     putDriver(driverId, response.data["@id"]);
    //   });
    //   postVehicleDoc(files).then((response) => {
    //     putDriver(vehicleId, response.data["@id"]);
    //     redirect("/drivers");
    //   });
    // },
  });
  return (
    <div>
      <Button
        onClick={handleClick}
        color="primary"
        variant="contained"
        label="ra.action.create"
        className={classes.contentButton}
      >
        <p className={classes.contentButtonP}>Add</p>
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

            <h1> Ajouter un Document </h1>

            <input
              type="file"
              onChange={(e) => {
                setFiles([...files, e.target.files[0]]);
              }}
              accept="file"
            />
            <input
              type="file"
              onChange={(e) => {
                setFiles([...files, e.target.files[0]]);
              }}
              accept="file"
            />

            <DialogActions className={classes.contentButton}>
              {!send ? (
                <Button
                  label="save"
                  color="primary"
                  variant="contained"
                  type="submit"
                  className={classes.contentButton}
                >
                  <p className={classes.contentButtonP}>Save</p>
                  <IconSave />
                </Button>
              ) : (
                <div className={classes.CircularProgress}>
                  <CircularProgress />
                </div>
              )}
              <Button
                label="ra.action.cancel"
                variant="contained"
                color="secondary"
                onClick={handleCloseClick}
                className={classes.contentButton}
                className={classes.contentButtonCancel}
              >
                <p className={classes.contentButtonP}>Cancel</p>

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
