import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import { notify } from "../utilities/utils";

const UpdateProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const name = formData.get("name");
        const photo = formData.get("photo");

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                const updatedUser = { ...user, displayName: name, photoURL: photo };
                setUser(updatedUser);

                notify("Profile Updated Successfully");
            })
            .catch((error) => {
                console.error("Error updating profile: ", error);
                notify("Error updating profile", "error");
            });
    };

    return (
        <div>
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <form
                onSubmit={handleSubmit}
                className="rounded-lg max-w-[400px] shadow-lg my-20 mx-auto p-10 flex flex-col gap-3"
            >
                <h1 className="text-2xl font-bold text-center text-success mb-3">
                    Update Profile
                </h1>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        name="photo"
                        type="text"
                        className="grow"
                        placeholder="Photo URL"
                        defaultValue={user?.photoURL || ""}
                    />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        name="name"
                        type="text"
                        className="grow"
                        placeholder="Name"
                        defaultValue={user?.displayName || ""}
                    />
                </label>
                <button className="btn btn-success text-white">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
