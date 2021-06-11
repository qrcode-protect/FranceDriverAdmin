import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconSave from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useRedirect } from "react-admin";

import { putDriverAvatar, upload } from "../data/api";

export function DriverEditAvatar({ record }) {
  const [send, setSend] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [files, setFiles] = useState();
  const redirect = useRedirect();
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
      putDriverAvatar(record.id, response.data["@id"]).then(() => {
        handleCloseClick();
        redirect("/drivers");
      });
    });
  }

  return (
    <>
      <Button
        onClick={handleClick}
        color="primary"
        variant="outlined"
        label="ra.action.create"
        size="small"
      >
        Edit Avatar
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

          <DialogActions>
            {!send ? (
              <div>
                <Button
                  label="save"
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={onChange}
                >
                  <IconSave />
                  Save
                </Button>
              </div>
            ) : (
              <div>
                <CircularProgress />
              </div>
            )}
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DriverEditAvatar;
