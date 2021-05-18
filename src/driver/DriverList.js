import React from "react";
import {
  TextField,
  List,
  Datagrid,
  BooleanField,
  DateField,
} from "react-admin";
import { DriverFilter } from "./DriverFilter";

export const DriverList = (props) => (
  <List {...props} filters={<DriverFilter />}>
    <Datagrid rowClick="show">
      <TextField source="firstName" />
      <TextField source="lastName" />
      <BooleanField source="status" />
      <TextField source="phoneNumber" />
      <DateField source="createdAt" />
    </Datagrid>
  </List>
);
