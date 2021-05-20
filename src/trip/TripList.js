import React from "react";
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

export const TripList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="fromLocation" />
      <TextField source="toLocation" />
      <TextField source="pickupTime" />
      <TextField source="tripDate" />
      <TextField source="amount" />
      <TextField source="driver" />
      <ReferenceField source="customer" reference="customers">
        <TextField source="lastName" />
      </ReferenceField>
      <TextField source="status" />
    </Datagrid>
  </List>
);
