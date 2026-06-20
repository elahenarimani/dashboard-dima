/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

import AppRoot from "@/pages";
import Dashboard from "@/pages/Dashboard";
import Chart from "@/pages/Dashboard/Chart";



const OrderList = lazy(() => import("../pages/Dashboard/OrderList"));
const ToDo = lazy(() => import("../pages/Dashboard/ToDo"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/chart" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "chart", element: <Chart /> },
          { path: "orderList", element: <OrderList /> },
          { path: "todo", element: <ToDo /> },
        ],
      },
    ],
  },
]);
