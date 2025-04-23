import React from 'react';
import {Link} from "react-router";

const Booking = ({booking}) => {
    // console.log(booking)


    const {name, experience, image, registrationNumber, speciality} = booking || {}
    return (
        <div className="card bg-white shadow-sm p-8">
            <figure>
                <img className='w-full h-[450px]'
                     src={image}/>
            </figure>
            <div className="card-actions justify-start mt-2 mb-2">
                <div className="badge badge-outline text-green-400 bg-[#176AE51A] rounded-full">Available</div>
                <div className="badge badge-outline text-[#176AE5] bg-[#176AE51A] rounded-full">{experience}</div>
            </div>
            <div className="card-body p-0">
                <h2 className="card-title text-2xl font-bold">
                    {name}
                </h2>
                <p className='text-xl text-[#0F0F0F99]'>{speciality}</p>
                <p className='border-b border-dashed border-[#0F0F0F33]'></p>
                <p className='mb-2 text-[#0F0F0F99] text-xl flex items-center'><i class="ri-registered-fill text-2xl "></i> <span className='pl-2'>Reg No: {registrationNumber}</span></p>

            </div>
            <Link to={`/doctor/${registrationNumber}`}>
                <button className="relative cursor-pointer rounded-4xl px-5 py-2.5 w-full overflow-hidden border border-blue-700 group bg-white relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-[#176AE5] hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 text-xl hover:text-white">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">View Details</span>
                </button>
            </Link>
        </div>
    );
};

export default Booking;