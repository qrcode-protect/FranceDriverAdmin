import React from "react";
import firebase from "firebase";

import { FirebaseAuthProvider } from "react-admin-firebase";
import { HydraAdmin, fetchHydra, hydraDataProvider } from "@api-platform/admin";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";
import { Resource } from "react-admin";

import config from "./config";
import drivers from "./driver";
import driverdocs from "./driverdoc";
import addresses from "./address";
import customers from "./customer";
import trips from "./trip";
import vehicles from "./vehicle";
import vehicledocs from "./vehicleDoc";

import { Dashboard, Formulaire } from "./components";
import MyLayout from "./Layout";
import Theme from "./Theme";
import CustomRoutes from "./CustomRoutes";
import LoginPage from "./LoginPage";
import mediaObjects from "./mediaObject";

const entrypoint = process.env.REACT_APP_ENTRY_POINT;
console.log(process.env.REACT_APP_ENTRY_POINT);
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
      <Resource name="driver_docs" {...driverdocs} />
      <Resource name="customers" {...customers} />
      <Resource name="addresses" {...addresses} />
      <Resource name="media_objects" {...mediaObjects} />
      <Resource name="trips" {...trips} />
      <Resource name="vehicles" {...vehicles} />
      <Resource name="vehicle_docs" {...vehicledocs} />
    </HydraAdmin>
  );
}

export default App;
