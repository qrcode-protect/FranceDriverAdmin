import React from "react";
import {
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";

export const CustomerShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Customer">
        <TextField source="firstName" label="Prénom" />
        <TextField source="lastName" label="Nom" />
        <TextField source="phone" label="Téléphone" />
        <TextField source="updatedAt" label="Mis à jour" />
      </Tab>
      <Tab label="Address" path="addresses">
        <ReferenceField
          source="address"
          reference="addresses"
          label="Rue"
          link="show"
        >
          <TextField source="street" />
        </ReferenceField>
        <ReferenceField
          source="address"
          reference="addresses"
          label="Ville"
          link="show"
        >
          <TextField source="city" />
        </ReferenceField>
        <ReferenceField
          source="address"
          reference="addresses"
          label="Code Postal"
          link="show"
        >
          <TextField source="postalCode" />
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
