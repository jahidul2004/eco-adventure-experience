import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-red-500">404</h1>

                <h2 className="text-4xl font-bold text-gray-800 mt-4">
                    {"Oops! Page not found"}!
                </h2>
                <p className="mt-2 text-lg text-gray-600 mb-10">
                    {
                        "The page you’re looking for doesn’t exist or an error occurred."
                    }
                </p>
                <Link
                    to={"/"}
                    className="font-bold bg-success mt-12 px-6 py-3 text-white rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
