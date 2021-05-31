import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  useNotify,
  useRefresh,
  useRedirect,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  FileInput,
} from "react-admin";

export const DriverEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = ({ data }) => {
    notify(`Changes to Driver "${data.fistName}" saved`);
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
        <ReferenceInput label="Addresse" source="address" reference="addresses">
          <SelectInput optionText="id" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
