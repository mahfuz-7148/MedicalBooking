import React from 'react';
import {Link} from "react-router";

const EmptyPart = () => {
    return (
        <div className=" py-16 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                You Have not Booked any appointment yet
            </h1>
            <p className="text-gray-600 mb-6 text-center">
                Our platform connects you with verified, experienced doctors across various specialities — at your convenience.
            </p>
            <Link to='/'>
                <button className="bg-blue-600 text-white px-6 cursor-pointer py-2 rounded-md hover:bg-blue-700 transition">
                    Book an Appointment
                </button>
            </Link>
        </div>
    );
};

export default EmptyPart;