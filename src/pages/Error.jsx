import {Link, } from "react-router";
import roboterror from '../assets/error-contact.jpg'

const Error = () => {

    return (
        <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
            <div className="rounded-lg p-8 max-w-2xl text-center">

                <img
                    src= {roboterror}
                    alt="404 Robot"
                    className="mx-auto mb-6 rounded-4xl"
                />
                <h1 className="text-3xl font-bold text-pink-500 mb-2">
                    404 - Page Not Found
                </h1>
                <p className="text-black mb-6 font-semibold">
                    OOPS! The page you're looking for doesn't exist.
                </p>
                <Link to="/">
                    <button className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;