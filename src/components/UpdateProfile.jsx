import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { notify } from "../utilities/utils";

const UpdateProfile = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get("name");
        const photo = formData.get("photo");

        updateUserProfile({ displayName: name, photoURL: photo })
            .then((result) => {
                console.log("Profile Updated: ", result);
                notify("Profile Updated Successfully");
            })
            .catch((error) => {
                console.error("Error updating profile: ", error);
                notify("Error updating profile", "error");
            });
    };

    const { user, updateUserProfile } = useContext(AuthContext);

    return (
        <div>
            {user ? (
                <form
                    onSubmit={handleSubmit}
                    className="rounded-lg max-w-[400px] shadow-lg my-20 mx-auto p-10 flex flex-col gap-3"
                >
                    <h1 className="text-2xl font-bold text-center text-success mb-3">
                        Update Profile
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
                            name="photo"
                            type="text"
                            className="grow"
                            placeholder="Photo URL"
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
                            name="name"
                            type="text"
                            className="grow"
                            placeholder="Name"
                        />
                    </label>
                    <button className="btn btn-success text-white">
                        Update Profile
                    </button>
                </form>
            ) : (
                <Navigate to={"/login"} />
            )}
        </div>
    );
};

export default UpdateProfile;
