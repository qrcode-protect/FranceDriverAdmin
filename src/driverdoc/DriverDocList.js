import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const DriverDocList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />

      <TextField source="identity" />
      <TextField source="vtcCard" />
    </Datagrid>
  </List>
);
