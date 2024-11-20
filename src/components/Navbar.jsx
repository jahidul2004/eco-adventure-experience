import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link>Your Profile</Link>
            </li>
            <li>
                <Link>Update Profile</Link>
            </li>
        </>
    );

    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold text-success">
                    Eco-Adventure Experiences
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="flex">
                        <img
                            className="w-[50px] h-[50px] border-2 border-success rounded-full p-1 mr-3"
                            src={user.photoURL}
                            alt=""
                        />
                        <Link
                            onClick={logOut}
                            className="btn btn-success text-white"
                        >
                            Logout
                        </Link>
                    </div>
                ) : (
                    <Link to={"/login"} className="btn btn-primary text-white">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
