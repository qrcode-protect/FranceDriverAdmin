import React from "react";
import {
  ReferenceField,
  Edit,
  TextInput,
  TabbedForm,
  FormTab,
} from "react-admin";
import { GetImageUrl } from "../helpers/helper";
import DriverEditDocOne from "../driver/driverEdit/DriverEditDocOne";

export const VehicleEdit = (props) => {
  return (
    <Edit {...props}>
      <TabbedForm>
        <FormTab label="caractéristique du vehicule">
          <p>
            Merci de sauvgarder les changement réaliser sur la page avant
            d'éditer les documents
          </p>
          <TextInput source="vehicleNumber" />
          <TextInput multiline source="color" />
          <TextInput multiline source="model" />
          <TextInput multiline source="modelYear" />
        </FormTab>
        <FormTab label="Documents">
          <ReferenceField
            source="documentionOne"
            label="Document n°1"
            reference="media_objects"
            link={false}
          >
            <GetImageUrl />
          </ReferenceField>
          <DriverEditDocOne />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
