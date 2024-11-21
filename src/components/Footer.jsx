import { BsFillThreadsFill } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import adventureImg from "../assets/adventure.png";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-[#f7f7f7] p-10">
            <aside>
                <img
                    className="w-[80px] h-[80px]"
                    src={adventureImg}
                    alt=""
                />
                <p className="font-bold text-2xl">Eco-Adventure Experiences</p>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                </p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="animate__animated animate__rubberBand animate__infinite" href="https://github.com/jahidul2004">
                        <FaGithub />
                    </a>
                    <a className="animate__animated animate__rubberBand animate__infinite" href="https://www.facebook.com/share/dbMWtFD4uzSn8KqU/">
                        <FaFacebook />
                    </a>
                    <a className="animate__animated animate__rubberBand animate__infinite" href="https://www.instagram.com/islam.jahidul.jihad">
                        <FaSquareInstagram />
                    </a>
                    <a className="animate__animated animate__rubberBand animate__infinite" href="https://www.threads.net/@islam.jahidul.jihad">
                        <BsFillThreadsFill />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
