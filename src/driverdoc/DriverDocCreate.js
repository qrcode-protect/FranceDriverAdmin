import React from "react";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { postDriverDoc, upload } from "../data/api";
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

export function DriverDocCreate() {
  const classes = useStyles();
  const redirect = useRedirect();

  const [identity, setidentity] = useState("");
  function sendFiles() {
    console.log("send");
    upload(identity).then((response) => {
      postDriverDoc(response.data["@id"]);
      redirect("/driver_docs");
      console.log(response);
    });
  }
  return (
    <div>
      <h1> Ajouter un Document </h1>
      <Card className={classes.bodyCard}>
        <CardContent className={classes.contentCard}>
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setidentity(e.target.files[0]);
            }}
            accept="file"
          />

          <Button
            variant="contained"
            color="secondary"
            type="submit"
            className={classes.button}
            onClick={sendFiles}
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
