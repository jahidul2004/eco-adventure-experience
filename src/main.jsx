import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import AuthProvider from "./provider/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    const response = await fetch("/public/advanture.json");
                    if (!response.ok) {
                        throw new Error("Failed to load adventures");
                    }
                    return response.json();
                },
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
