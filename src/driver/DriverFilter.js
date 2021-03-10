import React from "react";
import { Filter, SearchInput, ReferenceInput, SelectInput } from "react-admin";

export const DriverFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="firstName" alwaysOn />
    <ReferenceInput
      label="Last name"
      source="id"
      reference="drivers"
      allowEmpty
    >
      <SelectInput optionText="lastName" />
    </ReferenceInput>
  </Filter>
);
