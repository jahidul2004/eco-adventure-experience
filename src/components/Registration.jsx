import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import { notify } from "../utilities/utils";

const Registration = () => {
    const { createNewUser, setUser, updateUserProfile } =
        useContext(AuthContext);
    const [redirect, setRedirect] = useState(false);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const photo = formData.get("photo");
        const password = formData.get("password");

        if (!name || !email || !photo || !password) {
            notify("All fields are required!");
            return;
        }

        if (!passwordRegex.test(password)) {
            notify(
                "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long!"
            );
            return;
        }

        try {
            const userCredential = await createNewUser(email, password);
            const newUser = userCredential.user;

            await updateUserProfile({ displayName: name, photoURL: photo });

            setUser({ ...newUser, displayName: name, photoURL: photo });

            notify("User is created and logged in successfully!");
            setRedirect(true);
        } catch (error) {
            console.error("Error:", error);
            notify(`ERROR: ${error.message}`);
        }
    };

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-[400px] mx-auto shadow-xl p-5 rounded-lg my-10 flex flex-col gap-4"
        >
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <h1 className="text-success text-center font-bold text-2xl">
                User Registration
            </h1>

            <label className="input input-bordered flex items-center gap-2">
                <input
                    name="name"
                    type="text"
                    className="grow"
                    placeholder="Name"
                />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                <input
                    name="email"
                    type="email"
                    className="grow"
                    placeholder="Email"
                />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                <input
                    name="photo"
                    type="text"
                    className="grow"
                    placeholder="Photo URL"
                />
            </label>

            <label className="input input-bordered flex items-center gap-2">
                <input
                    name="password"
                    type="password"
                    className="grow"
                    placeholder="Password"
                />
            </label>

            <button className="btn btn-success text-white">Register</button>

            <p>
                Already have an account?{" "}
                <Link className="text-success font-semibold" to="/login">
                    Login
                </Link>
            </p>
        </form>
    );
};

export default Registration;
