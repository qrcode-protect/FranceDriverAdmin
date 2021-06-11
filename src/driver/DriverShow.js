import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import VehicleCreate from "../vehicle/VehicleCreate";
import { GetImageUrl } from "../helpers/helper";
import {
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";
import DriverEditAvatar from "./DriverEditAvatar";

const IsVehicle = ({ record }) => {
  let data = record.vehicle;
  if (data == null) {
    return <VehicleCreate driverId={record.id} />;
  } else {
    return <></>;
  }
};

export function DriverShow(props) {
  //const classes = useStyles();
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Driver">
          <ReferenceField
            source="avatar"
            label="Avatar"
            reference="media_objects"
            link={false}
          >
            <GetImageUrl />
          </ReferenceField>
          <DriverEditAvatar />

          <TextField source="firstName" />
          <TextField source="lastName" />
          <TextField source="phoneNumber" />
          <TextField source="driverDocs" />
        </Tab>
        <Tab label="Address" path="addresses">
          <h4>Street</h4>
          <ReferenceField
            source="address"
            reference="addresses"
            addLabel={false}
            link={false}
          >
            <TextField source="street" />
          </ReferenceField>
          <h4>City</h4>
          <ReferenceField
            source="address"
            reference="addresses"
            addLabel={false}
            link={false}
          >
            <TextField source="city" />
          </ReferenceField>
          <h4>Postal Code</h4>
          <ReferenceField
            source="address"
            reference="addresses"
            addLabel={false}
            link={false}
          >
            <TextField source="postalCode" />
          </ReferenceField>
          <ReferenceField
            source="address"
            reference="addresses"
            addLabel={false}
          >
            <Button variant="outlined">
              Edit
              <TextField source="id" />
            </Button>
          </ReferenceField>
        </Tab>
        <Tab label="Documents" path="driver_docs">
          <ReferenceField
            source="driverDoc"
            reference="driver_docs"
            addLabel={false}
          >
            <Button variant="outlined">
              Edit
              <TextField source="id" />
            </Button>
          </ReferenceField>
        </Tab>
        <Tab label="Vehicle" path="vehicles">
          <h4>Vehicle Number</h4>
          <ReferenceField
            source="vehicle"
            reference="vehicles"
            addLabel={false}
            link={false}
          >
            <TextField source="vehicleNumber" />
          </ReferenceField>
          <h4>Color</h4>
          <ReferenceField
            source="vehicle"
            reference="vehicles"
            addLabel={false}
            link={false}
          >
            <TextField source="color" />
          </ReferenceField>
          <h4>Model</h4>
          <ReferenceField
            source="vehicle"
            reference="vehicles"
            addLabel={false}
            link={false}
          >
            <TextField source="model" />
          </ReferenceField>
          <h4>Model Year</h4>
          <ReferenceField
            source="vehicle"
            reference="vehicles"
            addLabel={false}
            link={false}
          >
            <TextField source="modelYear" />
          </ReferenceField>
          <ReferenceField
            source="vehicle"
            reference="vehicles"
            addLabel={false}
          >
            <Button variant="outlined">
              Edit
              <TextField source="id" />
            </Button>
          </ReferenceField>
          <IsVehicle />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}
