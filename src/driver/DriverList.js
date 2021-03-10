import React from "react";
import { TextField, List, Datagrid, BooleanField } from "react-admin";
import { DriverFilter } from "./DriverFilter";

export const DriverList = (props) => (
  <List {...props} filters={<DriverFilter />}>
    <Datagrid rowClick="show">
      <TextField source="firstName" />
      <TextField source="lastName" />
      <BooleanField source="status" />
      <TextField source="phoneNumber" />
    </Datagrid>
  </List>
);
