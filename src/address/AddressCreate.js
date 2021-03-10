import React from "react";
import { SimpleForm, TextInput, Create } from "react-admin";

export const AddressCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="street" />
      <TextInput source="city" />
      <TextInput source="postalCode" />
    </SimpleForm>
  </Create>
);