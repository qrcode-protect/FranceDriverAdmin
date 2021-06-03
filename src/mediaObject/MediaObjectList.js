import React from "react";

import {
  List,
  Datagrid,
} from "react-admin";

import { GetLink } from "../helpers/helper";

export const MediaObjectList = (props) => (
  <List {...props}>
    <Datagrid>
      <GetLink />
    </Datagrid>
  </List>
);
