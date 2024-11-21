import { useContext, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { notify } from "../utilities/utils";

const Login = () => {
    const { loginUser, user, setUser, loginWithGoogle } =
        useContext(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        setError(null);

        loginUser(email, password)
            .then((userCredential) => {
                notify("User Logged In Successfully");
                setUser(userCredential.user);
                navigate("/");
            })
            .catch(() => {
                setError("Invalid email or password. Please try again.");
            });
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            navigate("/forgetPassword", { state: { email } });
        } else {
            navigate("/forgetPassword", { state: { } });
        }
    };

    if (user) {
        return <Navigate to={"/"} />;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-[400px] mx-auto shadow-xl p-5 rounded-lg my-10 flex flex-col gap-4"
        >
            <h1 className="text-success text-center font-bold text-2xl">
                User Login
            </h1>
            {/* Email Field */}
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                    ref={emailRef}
                    name="email"
                    type="email"
                    className="grow"
                    placeholder="Email"
                    required
                />
            </label>
            {/* Password Field */}
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                    />
                </svg>
                <input
                    name="password"
                    type="password"
                    className="grow"
                    placeholder="Password"
                    required
                />
            </label>
            {/* Forget Password Link */}
            <button
                type="button"
                className="text-success font-semibold text-left"
                onClick={handleForgetPassword}
            >
                Forget Password?
            </button>
            {/* Login Button */}
            <button type="submit" className="btn btn-success text-white">
                Login
            </button>
            {/* Google Login */}
            <button
                type="button"
                onClick={loginWithGoogle}
                className="btn border-success text-success bg-white flex items-center gap-2 justify-center"
            >
                <FcGoogle /> Login With Google
            </button>
            {/* Registration Link */}
            <p>
                Don't have an account?{" "}
                <Link
                    to={"/registration"}
                    className="text-success font-semibold"
                >
                    Register here
                </Link>
            </p>
            {/* Error Message */}
            {error && <p className="text-error font-semibold">{error}</p>}
        </form>
    );
};

export default Login;
