import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
          {
            path: "/",
            element:<Home></Home>
          }
        ]
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
