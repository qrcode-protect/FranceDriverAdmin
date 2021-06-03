import React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";
import { GetAvatarUrl } from "../helpers/helper";

export const CustomerList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <ReferenceField source="image" label="Avatar" reference="media_objects">
        <GetAvatarUrl />
      </ReferenceField>
      <TextField source="firstName" />
      <TextField source="lastName" />
      <ReferenceField source="address" reference="addresses" addLabel={false}>
        <TextField source="street" />
      </ReferenceField>
    </Datagrid>
  </List>
);
