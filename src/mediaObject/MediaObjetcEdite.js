import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  useNotify,
  useRefresh,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const CustomerEdit = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();

  const onSuccess = ({ data }) => {
    notify(`Changes to Customer "${data.fistName}" saved`);

    refresh();
  };
  return (
    <Edit
      title="Customer edition"
      onSuccess={onSuccess}
      mutationMode="pessimistic"
      {...props}
    >
      <SimpleForm>
        <ImageInput source="file" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};
