import React from "react";
import {
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";

export const DriverShow = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="Driver">
        <TextField source="firstName" />
        <TextField source="lastName" />
        <TextField source="phoneNumber" />
        <TextField source="driverDocs" />
      </Tab>
      <Tab label="Address" path="addresses">
        <ReferenceField source="address" reference="addresses" addLabel={false}>
          <TextField source="id" />
        </ReferenceField>
        <ReferenceField source="address" reference="addresses" addLabel={false}>
          <TextField source="street" />
        </ReferenceField>
        <ReferenceField source="address" reference="addresses" addLabel={false}>
          <TextField source="city" />
        </ReferenceField>
        <ReferenceField source="address" reference="addresses" addLabel={false}>
          <TextField source="postalCode" />
        </ReferenceField>
      </Tab>
      <Tab label="Documents" path="driver_docs">
        <ReferenceField
          source="driverDoc"
          reference="driver_docs"
          addLabel={false}
        >
          <TextField source="diverLicenceUrl" />
        </ReferenceField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
