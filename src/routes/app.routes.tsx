import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import ListClientPage from "../pages/ListClientPage";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/lista/clientes" exact component={ListClientPage} />
    </Switch>
  </Layout>
);

export default AppRoutes;
