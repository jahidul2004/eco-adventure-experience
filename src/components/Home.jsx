import { useEffect } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import NewsLetter from "./NewsLetter";

const Home = () => {
    const data = useLoaderData();
    const location = useLocation();

    useEffect(() => {
        let pageTitle = "Eco Adventure - Home";

        if (location.pathname === "/") {
            pageTitle = "Home - Eco Adventure";
        } else if (location.pathname === "/yourProfile") {
            pageTitle = "Your Profile - Eco Adventure";
        } else if (location.pathname === "/updateProfile") {
            pageTitle = "Update Profile - Eco Adventure";
        } else if (location.pathname === "/faq") {
            pageTitle = "FAQ - Eco Adventure";
        }else if(location.pathname === "/forgetPassword"){
            pageTitle = "Forget Password - Eco Adventure";
        }

        document.title = pageTitle;
    }, [location]);

    return (
        <div className="m-5">
            <div className="mb-10">
                <div className="carousel w-full rounded-lg">
                    <div
                        id="slide1"
                        className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/C2L6DDQ/download.jpg')] bg-no-repeat bg-cover h-[400px]"
                    >
                        <div className="flex justify-center items-center mx-auto">
                            <h1 className="text-5xl font-bold text-white">
                                Mountain Tracking
                            </h1>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide2" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                    <div
                        id="slide2"
                        className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/3YHHQTV/0eb7c4756f338c41a9a96b97b5563608.webp')] bg-no-repeat bg-cover h-[400px]"
                    >
                        <div className="flex justify-center items-center mx-auto">
                            <h1 className="text-5xl font-bold text-white">
                                Ocean Scuba Diving
                            </h1>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide3" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>

                    <div
                        id="slide3"
                        className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/D5psX0g/8080707b1bf86de1df6e7e82112a61d2ae856eec-37-png.png')] h-[400px] bg-no-repeat bg-cover"
                    >
                        <div className="flex justify-center items-center mx-auto">
                            <h1 className="text-5xl font-bold text-white">
                                Cave Exploration
                            </h1>
                        </div>

                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">
                                ❮
                            </a>
                            <a href="#slide1" className="btn btn-circle">
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className="text-3xl font-bold text-center mb-8">
                    Eco-friendly Adventure
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data.map((adventure) => (
                        <div
                            key={adventure.id}
                            className="adventure-card border-2 border-success rounded-lg p-4"
                        >
                            <img
                                className="w-full rounded-lg h-[200px]"
                                src={adventure.image}
                                alt={adventure.title}
                                width="300"
                                style={{ marginBottom: "10px" }}
                            />
                            <h2 className="text-xl font-bold my-2">
                                {adventure.title}
                            </h2>
                            <p className="font-bold text-md">
                                Eco-friendly Features
                            </p>
                            <ul className="list-inside list-disc">
                                {adventure.ecoFriendlyFeatures.map(
                                    (feature, index) => (
                                        <li key={index}>{feature}</li>
                                    )
                                )}
                            </ul>

                            <Link
                                to={`/adventure/${adventure.id}`}
                                className="btn btn-success text-white mt-4 w-full"
                            >
                                Explore Now!
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
