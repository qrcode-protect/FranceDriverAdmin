import React from "react";
import firebase from "firebase";

import { FirebaseAuthProvider } from "react-admin-firebase";
import { HydraAdmin, fetchHydra, hydraDataProvider } from "@api-platform/admin";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";
import { Resource } from "react-admin";

import config from "./config";
import drivers from "./driver";
import addresses from "./address";
import customers from "./customer";
import trips from "./trip";
import vehicles from "./vehicle";
import { Dashboard } from "./components";
import MyLayout from "./Layout";
import Theme from "./Theme";
import CustomRoutes from "./CustomRoutes";
import LoginPage from "./LoginPage";
import mediaObjects from "./mediaObject";

const entrypoint = "http://104.155.24.90";
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
      dataProvider={dataProvider}
      entrypoint={entrypoint}
      authProvider={authProvider}
      customRoutes={CustomRoutes}
    >
      <Resource name="drivers" {...drivers} />
      <Resource name="customers" {...customers} />
      <Resource name="addresses" {...addresses} />
      <Resource {...mediaObjects} />
      <Resource name="trips" {...trips} />
      <Resource name="vehicles" {...vehicles} />
    </HydraAdmin>
  );
}

export default App;
