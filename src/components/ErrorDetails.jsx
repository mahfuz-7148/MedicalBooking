import React from 'react';
import {Link} from "react-router";

const ErrorDetails = ({id}) => {
    return (
        <div>

            <div className='p-15 mx-auto mt-6'>
                <h1 className='text-4xl text-center font-bold py-5'>No Doctor Found!!</h1>
                <p className='text-base text-center text-[#141414B3] font-normal'>No Doctor Found with this registration No.</p>
                <p className='justify-center mt-5 text-[#0F0F0F99] text-xl flex items-center'><i className="ri-registered-fill text-2xl "></i> <span className='pl-2'>{id}</span></p>
                <div className='text-center mt-8'>
                    <Link to='/'>
                        <button className="bg-blue-600 text-white px-6 cursor-pointer py-2 rounded-md hover:bg-blue-700 transition">
                            View All Doctors
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ErrorDetails;