import React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const CustomerList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="firstName" />
      <TextField source="lastName" />
      <ReferenceField source="address" reference="addresses" addLabel={false}>
        <TextField source="street" />
      </ReferenceField>
      <TextField source="image" />
    </Datagrid>
  </List>
);
