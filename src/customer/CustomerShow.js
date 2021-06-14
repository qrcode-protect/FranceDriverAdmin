import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { GetImageUrl } from "../helpers/helper";
import CustomerEditImage from "./CustomerEditImage";

import {
  ReferenceField,
  Show,
  Tab,
  TabbedShowLayout,
  TextField,
} from "react-admin";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
}));

export function CustomerShow(props) {
  const classes = useStyles();

  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Customer">
          <ReferenceField
            source="image"
            label="Image"
            reference="media_objects"
            link={false}
          >
            <GetImageUrl />
          </ReferenceField>
          <CustomerEditImage />

          <TextField source="firstName" label="Prénom" />
          <TextField source="lastName" label="Nom" />
          <TextField source="phoneNumber" label="Téléphone" />
          <TextField source="updatedAt" label="Mis à jour" />
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
            <Button variant="outlined" className={classes.button}>
              Edit
              <TextField source="id" />
            </Button>
          </ReferenceField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}
