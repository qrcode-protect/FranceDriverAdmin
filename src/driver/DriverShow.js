import React from "react";
import VehicleCreate from "../vehicle/VehicleCreate";

import {
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";

export function DriverShow(props) {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Driver">
          <TextField source="id" />
          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField source="phoneNumber" />
          <TextField source="driverDocs" />
        </Tab>
        <Tab label="Address" path="addresses">
          <ReferenceField
            source="address"
            reference="addresses"
            addLabel={false}
          >
            <TextField source="id" />
          </ReferenceField>
          <ReferenceField
            source="address"
            reference="addresses"
            addLabel={false}
          >
            <TextField source="street" />
          </ReferenceField>
          <ReferenceField
            source="address"
            reference="addresses"
            addLabel={false}
          >
            <TextField source="city" />
          </ReferenceField>
          <ReferenceField
            source="address"
            reference="addresses"
            addLabel={false}
          >
            <TextField source="postalCode" />
          </ReferenceField>
        </Tab>
        <Tab label="Documents" path="driver_docs">
          <TextField source="driverDoc" />
        </Tab>
        <Tab label="Vehicle" path="vehicles">
          <ReferenceField
            source="vehicle"
            reference="vehicles"
            addLabel={false}
          >
            <TextField source="vehicleNumber" />
          </ReferenceField>

          <VehicleCreate driverId={props.id} />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}
