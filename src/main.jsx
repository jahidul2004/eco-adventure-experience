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
import YourProfile from "./components/YourProfile";
import UpdateProfile from "./components/UpdateProfile";
import AdventureDetails from "./components/AdventureDetails";
import { ToastContainer } from "react-toastify";

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
                    const response = await fetch("/advanture.json");
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
            {
                path: "/yourProfile",
                element: <YourProfile></YourProfile>,
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: "/adventure/:id",
                element: <AdventureDetails></AdventureDetails>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ToastContainer />
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
