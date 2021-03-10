import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "react-admin";

const styles = {
  button: {
    marginTop: "1em",
  },
};

const EditButton = ({ classes, record }) => (
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    to={`/addresses/create?post_id=${record.id}`}
    label="Edit Address"
    title="Edit Address"
  >
    <EditIcon />
  </Button>
);

export default withStyles(styles)(EditButton);
