import React from "react";
import {
  SimpleForm,
  Create,
  FileInput,
  FileField,
} from "react-admin";

export const DriverDocCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <FileInput source="file">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
