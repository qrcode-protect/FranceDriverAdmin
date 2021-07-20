import React from "react";
import {
  Edit,
  useRedirect,
  BooleanInput,
  SimpleForm,
  TextInput,
  DateInput,
  useRefresh,
} from "react-admin";

export const CustomerEdit = (props) => {
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = ({ data }) => {
    redirect("/customers");
    refresh();
  };
  return (
    <Edit
      title="Address edition"
      onSuccess={onSuccess}
      mutationMode="pessimistic"
      {...props}
    >
      <SimpleForm>
        <TextInput source="firstName" />
        <TextInput multiline source="lastName" />
        <TextInput multiline source="phoneNumber" />
        <TextInput multiline source="deviceType" />
        {/* <BooleanInput label="gender" source="gender" /> */}
        <DateInput source="updateAt" />
        <TextInput multiline source="idfirebase" />
        <TextInput multiline source="email" />
      </SimpleForm>
    </Edit>
  );
};
