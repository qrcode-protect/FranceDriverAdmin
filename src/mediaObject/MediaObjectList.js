import React from "react";
import { GetLink } from "../helpers/helper";
import { List, Datagrid, TextField } from "react-admin";

export const MediaObjectList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <GetLink />
    </Datagrid>
  </List>
);
