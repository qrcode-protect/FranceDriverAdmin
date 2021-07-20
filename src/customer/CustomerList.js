import React from "react";
import {
  List,
  EditButton,
  Datagrid,
  TextField,
  ReferenceField,
} from "react-admin";
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
      <TextField source="phoneNumber" />
      <TextField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);
