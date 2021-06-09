import React from "react";
import { List, Datagrid, TextField } from "react-admin";
import { GetIdentity } from "../helpers/helper";

export const DriverDocList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />

      <GetIdentity label="Identity" />
      {/* <TextField source="identity" /> */}
      <TextField source="vtcCard" />
    </Datagrid>
  </List>
);
