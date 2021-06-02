import React from "react";
import {
  useListContext,
  EditButton,
  List,
  Datagrid,
  TextField,
} from "react-admin";
import { Card, CardContent, Checkbox } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import { GetLink } from "../helpers/helper";

const cardStyle = {
  width: 300,
  minHeight: 300,
  margin: "0.5em",
  display: "inline-block",
  verticalAlign: "top",
};

export const MediaObjectList = (props) => (
  <List {...props}>
    <Datagrid>
      <GetLink />
    </Datagrid>
  </List>
);
