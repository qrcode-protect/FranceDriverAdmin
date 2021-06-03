import React from "react";
import {
  TextField,
  List,
  Datagrid,
  BooleanField,
  ShowButton,
  DateField,
  ReferenceField,
} from "react-admin";
import { DriverFilter } from "./DriverFilter";
import { GetAvatarUrl } from "../helpers/helper";

export const DriverList = (props) => (
  <List {...props} filters={<DriverFilter />}>
    <Datagrid rowClick="show">
      <ReferenceField source="avatar" label="Avatar" reference="media_objects">
        <GetAvatarUrl />
      </ReferenceField>
      <TextField source="firstName" />
      <TextField source="lastName" />
      <BooleanField source="status" />
      <TextField source="phoneNumber" />
      <DateField source="createdAt" />
      <ShowButton />
    </Datagrid>
  </List>
);
