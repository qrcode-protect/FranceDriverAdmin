import React from "react";
import firebase from "firebase";

import { FirebaseAuthProvider } from "react-admin-firebase";
import { HydraAdmin, fetchHydra, hydraDataProvider } from "@api-platform/admin";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";
import { Resource } from "react-admin";
import { Dashboard, Formulaire } from "./components";

import config from "./config";
import MyLayout from "./Layout";
import Theme from "./Theme";
import CustomRoutes from "./CustomRoutes";
import LoginPage from "./LoginPage";

import drivers from "./driver";
import driverDocs from "./driversDoc";
import customers from "./customer";
import addresses from "./address";
import mediaObjects from "./mediaObject";
import trips from "./trip";
import vehicles from "./vehicle";
import vehicleDocs from "./vehicleDoc";
import gestions from "./gestion";
import vehicleTypes from "./vehicleType";
import messagesCustomers from "./messageCustomer";
import messagesDrivers from "./messageDriver";

const entrypoint = process.env.REACT_APP_ENTRY_POINT;

firebase.initializeApp(config);
const authProvider = FirebaseAuthProvider(config);
const dataProvider = hydraDataProvider(
  entrypoint,
  fetchHydra,
  parseHydraDocumentation,
  true // useEmbedded parameter
);

function App() {
  return (
    <HydraAdmin
      theme={Theme}
      loginPage={LoginPage}
      layout={MyLayout}
      dashboard={Dashboard}
      formulaire={Formulaire}
      dataProvider={dataProvider}
      entrypoint={entrypoint}
      authProvider={authProvider}
      customRoutes={CustomRoutes}
    >
      <Resource name="drivers" {...drivers} />
      <Resource name="driver_docs" {...driverDocs} />
      <Resource name="customers" {...customers} />
      <Resource name="addresses" {...addresses} />
      <Resource name="media_objects" {...mediaObjects} />
      <Resource name="trips" {...trips} />
      <Resource name="vehicles" {...vehicles} />
      <Resource name="vehicle_docs" {...vehicleDocs} />
      <Resource name="vehicle_types" {...vehicleTypes} />
      <Resource name="message_customers" {...messagesCustomers} />
      <Resource name="message_drivers" {...messagesDrivers} />
      <Resource name="gestions" {...gestions} />
    </HydraAdmin>
  );
}

export default App;
