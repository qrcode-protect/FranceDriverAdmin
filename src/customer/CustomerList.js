import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ShowButton,
  EditButton,
} from "react-admin";
import { GetAvatarUrl } from "../helpers/helper";

export const CustomerList = (props) => (
  <List {...props}>
    <Datagrid>
      <ReferenceField source="image" label="Avatar" reference="media_objects">
        <GetAvatarUrl />
      </ReferenceField>
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="deviceType" />

      <ReferenceField source="address" reference="addresses" addLabel={false}>
        <TextField source="street" />
      </ReferenceField>
      <ShowButton />
      <EditButton />
    </Datagrid>
  </List>
);
