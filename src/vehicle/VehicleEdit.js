import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const VehicleEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="vehicleNumber" />
        <TextInput multiline source="color" />
        <TextInput multiline source="model" />
        <TextInput multiline source="modelYear" />
      </SimpleForm>
    </Edit>
  );
};
