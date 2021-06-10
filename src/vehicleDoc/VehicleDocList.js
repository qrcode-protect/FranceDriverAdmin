import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const VehicleDocList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="vehicleRegistrationCard" />
      <TextField source="insuranceCard" />
    </Datagrid>
  </List>
);
