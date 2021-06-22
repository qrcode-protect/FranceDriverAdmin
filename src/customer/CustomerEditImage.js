import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import IconSave from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { useRedirect } from "react-admin";

import { putCustomerImage, upload } from "../data/api";

export function CustomerEditImage({ record }) {
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
      putCustomerImage(record.id, response.data["@id"]).then(() => {
        handleCloseClick();
        redirect("/customers");
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
        Edit Image
      </Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="Edit Image"
      >
        <DialogTitle>Editer L'image</DialogTitle>

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

export default CustomerEditImage;
