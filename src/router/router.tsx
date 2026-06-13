import { createBrowserRouter, Navigate } from "react-router-dom";
import AppRoot from "../pages";
import Dashboard from "../pages/Dashboard";
import Chart from "../pages/Dashboard/OrderList";
import Table from "../pages/Dashboard/Table";
import ToDo from "../pages/Dashboard/ToDo";

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
                    { path: "table", element: <Table /> },
                    { path: "todo", element: <ToDo /> },
                ],
            },
        ],
    },
]);