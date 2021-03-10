import React from "react";
import { SimpleForm, TextInput, Create } from "react-admin";

export const DriverCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Create>
);
