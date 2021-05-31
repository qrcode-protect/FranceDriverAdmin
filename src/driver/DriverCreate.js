import React from "react";
import {
  SimpleForm,
  TextInput,
  Create,
  DateInput,
  required,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import DriverReferenceInput from "./DriverReferenceInput";
import DriverDocReferenceInput from "./DriverDocReferenceInput";

export const DriverCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="phoneNumber" />
      <BooleanInput source="status" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      {/* <ReferenceInput label="Addresse" source="address" reference="addresses">
        <SelectInput optionText="city" />
      </ReferenceInput> */}
      <DriverReferenceInput
        source="address"
        reference="addresses"
        allowEmpty
        validate={required()}
        perPage={10000}
        label="Adresse"
      />
      <DriverDocReferenceInput
        source="mediaObject"
        reference="mediaObjects"
        allowEmpty
        validate={required()}
        perPage={10000}
        label="Document du conducteur"
      />
    </SimpleForm>
  </Create>
);
