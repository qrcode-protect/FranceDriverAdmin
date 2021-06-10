import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import IconContentAdd from "@material-ui/icons/Add";
import IconCancel from "@material-ui/icons/Cancel";
import IconSave from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import { makeStyles } from "@material-ui/core/styles";
import { putDriverAvatar, upload } from "../data/api";
import { useRedirect } from "react-admin";

const useStyles = makeStyles(() => ({
  contentForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "10rem",
    textAlign: "center",
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
  InputNone: {
    display: "none",
  },
}));

export function DriverEditSoft({ record }) {
  const classes = useStyles();
  const redirect = useRedirect();
  const [send, setSend] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [files, setFiles] = useState();
  const handleClick = () => {
    setShowDialog(true);
  };
  const handleCloseClick = () => {
    setShowDialog(false);
  };

  function onChange() {
    setSend(true);
    upload(files).then((response) => {
      console.log(record.id);
      console.log(response.data["@id"]);
      putDriverAvatar(record.id, response.data["@id"]);
      redirect("/drivers");
    });
  }

  return (
    <div>
      <Button
        onClick={handleClick}
        color="primary"
        variant="contained"
        label="ra.action.create"
        className={classes.contentButton}
      >
        <p className={classes.contentButtonP}>Edit</p>
        <IconContentAdd />
      </Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="Edit Avatar"
      >
        <DialogTitle>Editer L'avatar</DialogTitle>

        <DialogContent>
          <input
            type="file"
            onChange={(e) => {
              setFiles(e.target.files[0]);
            }}
            accept="file"
          />

          <DialogActions className={classes.contentButton}>
            {!send ? (
              <div className={classes.contentButton}>
                <Button
                  label="save"
                  color="primary"
                  variant="contained"
                  type="submit"
                  className={classes.contentButton}
                  onClick={onChange}
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
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DriverEditSoft;
