import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { LayoutDashboard } from "./layouts/layout_dashboard";

//Routes
import newsRoutes from "./routes/NewsRoutes";
import dashboardRoutes from "./routes/DashboardRoutes";
import loginRoutes from "./routes/LoginRoutes";

const routes = [
  {
    path: "/",
    exact: true,
    layout: LayoutDashboard,
    component: () => <Redirect to="/home" />
  }
];
routes.push(...newsRoutes, ...dashboardRoutes, ...loginRoutes);

export default routes;
