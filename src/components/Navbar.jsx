import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import "animate.css";
import logo from "../assets/logo.png";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link>Home</Link>
            </li>
            <li>
                <Link to={"/yourProfile"}>My Profile</Link>
            </li>
            <li>
                <Link to={"/updateProfile"}>Update Profile</Link>
            </li>
            <li>
                <Link to={"/faq"}>FAQ</Link>
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
                <a className="animate__animated animate__bounce flex items-center gap-2 text-lg md:text-xl lg:text-2xl font-bold text-success">
                    <img className="w-[40px] h-[40px]" src={logo} alt="" />
                    Eco-Adventure
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
                            title={user.displayName || "User"}
                        />
                        <Link
                            onClick={logOut}
                            className="btn btn-error text-white"
                        >
                            Logout
                        </Link>
                    </div>
                ) : (
                    <Link
                        to={"/login"}
                        className="animate__animated animate__fadeIn btn btn-success text-white"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
