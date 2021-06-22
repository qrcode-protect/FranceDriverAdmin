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
      <TextField source="deviceType" />
    </Datagrid>
  </List>
);
