import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export function VehicleTypeCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="vehicleType" />
        <TextInput source="price" />
      </SimpleForm>
    </Create>
  );
}
