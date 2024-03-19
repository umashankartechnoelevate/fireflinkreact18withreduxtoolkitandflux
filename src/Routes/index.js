import React from "react";
import { useRoutes } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";

const RoutingWithLayout = () => {
  const route = useRoutes([DashboardRoutes]);
  return route;
};

export default RoutingWithLayout;
