import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Navigate } from "react-router-dom";

const YourProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            {user ? (
                <div>
                    <h1 className="text-center font-bold text-success text-4xl mt-5">
                        Welcome {user.displayName}!
                    </h1>
                    <div className="max-w-[800px] border-l-8 border-success shadow-xl p-10 my-20 mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <img
                                className="max-w-[100px] max-h-[100px] border-2 border-success rounded-lg p-2"
                                src={user.photoURL}
                                alt="Profile"
                            />
                            <div>
                                <p className="text-3xl font-bold">
                                    {user.displayName}
                                </p>
                                <p className="font-semibold">{user.email}</p>
                                <Link className="btn btn-success text-white mt-2">
                                    Update Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Navigate to={"/login"} />
            )}
        </div>
    );
};

export default YourProfile;
