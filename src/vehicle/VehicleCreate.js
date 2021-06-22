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
import { postVehicleDoc, postVehicle, putDriver } from "../data/api";
import { useRedirect } from "react-admin";

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
    paddingLeft: "10px",
  },
  contentButtonCancel: {
    margin: "10px",
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

      postVehicleDoc(files).then((resp) => {
        values.vehicleDoc = resp.data["@id"];
        postVehicle(values).then((response) => {
          putDriver(driverId, response.data["@id"]);
          redirect("/drivers");
        });
      });
    },
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

            <div>
              <div>
                <label for="vtcCard">Insurance Card : </label>
                <input
                  type="file"
                  onChange={(e) => {
                    setFiles([...files, e.target.files[0]]);
                  }}
                  accept="file"
                />
              </div>

              <div>
                <label for="vtcCard">Registration Card : </label>
                <input
                  type="file"
                  onChange={(e) => {
                    setFiles([...files, e.target.files[0]]);
                  }}
                  accept="file"
                />
              </div>
            </div>

            <DialogActions className={classes.contentButton}>
              {!send ? (
                <div className={classes.contentButton}>
                  <Button
                    label="save"
                    color="primary"
                    variant="contained"
                    type="submit"
                    className={classes.contentButton}
                  >
                    <IconSave />

                    <p className={classes.contentButtonP}>Save</p>
                  </Button>

                  <Button
                    label="ra.action.cancel"
                    variant="contained"
                    color="secondary"
                    onClick={handleCloseClick}
                    className={classes.contentButtonCancel}
                  >
                    <IconCancel />

                    <p className={classes.contentButtonP}>Cancel</p>
                  </Button>
                </div>
              ) : (
                <div className={classes.CircularProgress}>
                  <CircularProgress />
                </div>
              )}
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default VehicleCreate;
