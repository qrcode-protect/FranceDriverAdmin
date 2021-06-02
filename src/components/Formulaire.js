import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {
  SimpleForm,
  TextInput,
  Create,
  FileInput,
  FileField,
  DateInput,
  BooleanInput,
} from "react-admin";

const useStyles = makeStyles((theme) => ({}));

export function Formulaire() {
  const classes = useStyles();

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
