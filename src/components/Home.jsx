import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
    const data = useLoaderData();

    console.log("Data is: ", data);

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
                        className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/C2L6DDQ/download.jpg')] bg-no-repeat bg-cover h-[400px]"
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
                        className="carousel-item relative w-full bg-[url('https://i.ibb.co.com/C2L6DDQ/download.jpg')] h-[400px] bg-no-repeat bg-cover"
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
        </div>
    );
};

export default Home;
