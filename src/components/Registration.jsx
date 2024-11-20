import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Registration = () => {
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get("name");
        const email = formData.get("email");
        const photo = formData.get("photo");
        const password = formData.get("password");

        createNewUser(email, password)
        .then((userCredential) => {
            console.log("User is created: ", userCredential);
            setUser(userCredential.user);

            updateUserProfile({ displayName: name, photoURL: photo })
            .then((result) =>{
                console.log("Profile Updated: ", result);
            })
            .catch((error) =>{
                console.error("Error updating profile: ", error);
            })
        })
        .catch((error) => {
            console.error("Error creating user: ", error);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto shadow-xl p-5 rounded-lg my-10 flex flex-col gap-4">
            <h1 className="text-success text-center font-bold text-2xl">
                User Registration
            </h1>
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
                    name="name"
                    type="text"
                    className="grow"
                    placeholder="Name"
                />
            </label>
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
                    name="email"
                    type="email"
                    className="grow"
                    placeholder="Email"
                />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                    name="photo"
                    type="text"
                    className="grow"
                    placeholder="Photo Url"
                />
            </label>
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
                />
            </label>
            <button className="btn btn-success text-white">Register</button>
            <p>
                Have any account? please{" "}
                <Link className="text-success font-semibold" to={"/login"}>
                    Login
                </Link>
            </p>
        </form>
    );
};

export default Registration;
