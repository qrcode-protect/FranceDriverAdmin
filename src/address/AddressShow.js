import React from "react";
import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AddressShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="Street" />
      <TextField source="city" />
    </SimpleShowLayout>
  </Show>
);
