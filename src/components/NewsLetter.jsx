const NewsLetter = () => {
    return (
        <div className="my-10 shadow-xl p-10 text-center flex flex-col gap-3 rounded-lg">
            <h1 className="text-4xl font-bold text-center text-success">
                Subscribe to our weekly newsletter!
            </h1>
            <p className="font-semibold">
                Eco Adventure is a platform dedicated to promoting sustainable
                and <br /> environmentally friendly travel experiences.
            </p>

            <div className="max-w-[400px] mx-auto">
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70"
                    >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                        type="text"
                        className="grow"
                        placeholder="Enter Your Email"
                    />
                </label>
                <button className="mt-2 btn btn-success text-white">
                    Subscribe!
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;
