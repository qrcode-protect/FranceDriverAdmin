import React from "react";
import {
  Edit,
  ReferenceField,
  SimpleForm,
  TextInput,
  DateInput,
  useNotify,
  useRefresh,
  useRedirect,
  BooleanInput,
  FileInput,
  FileField,
} from "react-admin";
import { GetImageUrl } from "../helpers/helper";

export const DriverEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = ({ data }) => {
    notify(`Changes to Driver  saved`);
    redirect("/drivers");
    refresh();
  };
  return (
    <Edit
      title="Driver edition"
      onSuccess={onSuccess}
      mutationMode="pessimistic"
      {...props}
    >
      <SimpleForm>
        <TextInput source="firstName" />
        <TextInput multiline source="lastName" />
        <TextInput multiline source="phoneNumber" />
        <BooleanInput label="status" source="status" />
        <DateInput source="updateAt" />
      </SimpleForm>
    </Edit>
  );
};
