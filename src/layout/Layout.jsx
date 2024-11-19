import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
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