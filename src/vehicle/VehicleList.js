import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

export const VehicleList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="vehicleNumber" />
      <TextField source="color" />
      <TextField source="model" />
      <TextField source="modelYear" />
      <EditButton />
    </Datagrid>
  </List>
);
