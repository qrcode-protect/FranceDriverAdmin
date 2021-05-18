import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const CustomerList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="email" />
      <TextField source="phoneNumber" />
      <TextField source="createdAt" />
      <TextField source="updatedAt" />
    </Datagrid>
  </List>
);
