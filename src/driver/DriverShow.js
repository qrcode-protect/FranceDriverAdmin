import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import VehicleCreate from "../vehicle/VehicleCreate";
import { makeStyles } from "@material-ui/core/styles";
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
        <TextField source="id" />
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
        <TextField source="driverDoc" />
      </Tab>
      <Tab label="Vehicle" path="vehicles">
        <TextField source="vehicle" />
        <VehicleCreate driverId={props.id} />
      </Tab>
    </TabbedShowLayout>
  </Show>
);
