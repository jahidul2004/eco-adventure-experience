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
import Faq from "./components/Faq";
import PrivateRoute from "./components/PrivateRoute";
import ForgetPassword from "./components/ForgetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
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
                element: (
                    <PrivateRoute>
                        <YourProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/updateProfile",
                element: (
                    <PrivateRoute>
                        <UpdateProfile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/adventure/:id",
                element: (
                    <PrivateRoute>
                        <AdventureDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/faq",
                element: <Faq></Faq>,
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>,
            },
            {
                path:"/forgetPassword",
                element:<ForgetPassword></ForgetPassword>
            }
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
