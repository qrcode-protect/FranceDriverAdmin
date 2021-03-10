import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  useNotify,
  useRefresh,
  useRedirect,
} from "react-admin";

export const AddressEdit = (props) => {
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
      title="Address edition"
      onSuccess={onSuccess}
      mutationMode="pessimistic"
      {...props}
    >
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="street" />
        <TextInput multiline source="city" />
        <TextInput multiline source="postalCode" />
        <DateInput source="updateAt" />
      </SimpleForm>
    </Edit>
  );
};
