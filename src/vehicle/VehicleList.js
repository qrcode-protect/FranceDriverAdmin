import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const VehicleList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="vehicleNumber" />
      <TextField source="color" />
      <TextField source="model" />
      <TextField source="mdelYear" />
      <TextField source="vehicleDoc" />
    </Datagrid>
  </List>
);
