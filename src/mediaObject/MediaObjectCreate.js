import React from "react";
import { SimpleForm, Create, ImageInput, ImageField } from "react-admin";

export const MediaObjectCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ImageInput source="file" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
