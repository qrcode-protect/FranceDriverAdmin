import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const VehicleTypeList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="vehicleType" />
    </Datagrid>
  </List>
);
