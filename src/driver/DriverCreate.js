import React from "react";
import {
  SimpleForm,
  TextInput,
  Create,
  DateInput,
  BooleanInput,
} from "react-admin";

export const DriverCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="phoneNumber" />
      <BooleanInput source="status" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Create>
);
