import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const AddressList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="street" />
      <TextField source="city" />
      <TextField source="postalCode" />
    </Datagrid>
  </List>
);
