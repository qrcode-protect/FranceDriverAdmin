import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const VehicleDocList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="cardVehicle" />
      <TextField source="insuranceUrl" />
      <TextField source="technicalInspectionUrl" />
    </Datagrid>
  </List>
);
