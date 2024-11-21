import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        const pageTitles = {
            "/": "Home - Eco Adventure",
            "/yourProfile": "My Profile - Eco Adventure",
            "/updateProfile": "Update Profile - Eco Adventure",
            "/faq": "FAQ - Eco Adventure",
            "/forgetPassword": "Forget Password - Eco Adventure",
            "/registration": "Registration - Eco Adventure",
            "/login": "Login - Eco Adventure",
            "/adventure/:id": "Adventure Details - Eco Adventure",
            "*": "Error - Eco Adventure",
        };

        const title = pageTitles[location.pathname] || "Eco Adventure";
        document.title = title;
    }, [location]);

    return (
        <div>
            {/* Navbar start from here */}
            <Navbar></Navbar>
            {/* Navbar end here */}

            {/* Main content start from here */}
            <Outlet></Outlet>
            {/* Main content end here */}

            {/* Footer start from here */}
            <Footer></Footer>
            {/* Footer End here */}
        </div>
    );
};

export default Layout;
