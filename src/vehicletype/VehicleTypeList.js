import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { List, Datagrid, TextField } from "react-admin";

export const VehicleTypeList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="vehicleType" />
    </Datagrid>
  </List>
);
