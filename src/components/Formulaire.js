import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import {
  SimpleForm,
  TextInput,
  FileInput,
  FileField,
  DateInput,

} from "react-admin";


export function Formulaire() {
  return (
    <div>
      <Grid>
        <Card>
          <CardHeader title="Création d'un customer" />
          <CardContent>
            <SimpleForm>
              <TextInput source="firstName" />
              <TextInput source="lastName" />
              <DateInput source="createdAt" />
              <DateInput source="updatedAt" />
              <TextInput source="idfirebase" />
              <FileInput source="file">
                <FileField source="src" title="title" />
              </FileInput>
            </SimpleForm>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
