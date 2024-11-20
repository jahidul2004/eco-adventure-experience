import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const YourProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1 className="text-center font-bold text-success text-4xl mt-5">Welcome {user.displayName}!</h1>
            <div className="max-w-[800px] border-l-8 border-success shadow-xl p-10 my-20 mx-auto">
                {user ? (
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <img className="border-2 border-success rounded-lg p-2" src={user.photoURL} alt="Profile" />
                        <div>
                            <p className="text-3xl font-bold">{user.displayName}</p>
                            <p className="font-semibold">{user.email}</p>
                            <Link className="btn btn-success text-white mt-2">Update Profile</Link>
                        </div>
                    </div>
                ) : (
                    <p>You are not logged in</p>
                )}
            </div>
        </div>
    );
};

export default YourProfile;
