import React, { useContext, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { notify } from "../utilities/utils";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation } from "react-router-dom";

const ForgetPassword = () => {
    const emailRef = useRef();
    const location = useLocation();
    const { forgetPassword } = useContext(AuthContext);
    const prefilledEmail = location.state?.email || "";

    useEffect(() => {
        if (prefilledEmail) {
            emailRef.current.value = prefilledEmail;
        }
    }, [prefilledEmail]);

    const handleResetPassword = () => {
        const email = emailRef.current.value;

        if (!email) {
            notify("Please enter your email address.");
            return;
        }

        forgetPassword(email)
            .then(() => {
                notify(`A password reset link has been sent to ${email}.`);
                window.open("https://mail.google.com", "_blank");
            })
            .catch((error) => {
                console.error("Password Reset Error:", error);
                notify(`Error: ${error.message}`, "error");
            });
    };

    return (
        <div className="flex flex-col gap-2 max-w-[400px] my-10 mx-auto text-center shadow-xl p-10 rounded-lg">
            <h1 className="text-3xl font-bold text-success mb-5">Forgot Password?</h1>
            <input
                ref={emailRef}
                type="email"
                className="input border border-black p-2"
                placeholder="Enter Your Email"
            />
            <button
                type="button"
                onClick={handleResetPassword}
                className="btn btn-success text-white mt-4"
            >
                Reset Password
            </button>
        </div>
    );
};

export default ForgetPassword;
