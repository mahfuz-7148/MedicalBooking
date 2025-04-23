import React from 'react';
import {getBookings, removeBookings} from "../utils/index.js";



const AppoinmentCard = ({bookingDoctor, setDisplayBooking}) => {
    const {registrationNumber, name, fee, speciality, education} = bookingDoctor
    return (
        <>
        <div className='mb-10'>
            <div className="p-5 bg-white rounded-3xl mt-10">

                <div className='flex justify-between items-center space-y-5'>
                    <div>
                        <h2 className="text-xl font-semibold text-black">{name}</h2>
                        <p className="text-lg text-gray-600 mt-5">{education}, {speciality}</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-600">Appointment Fee: {fee} Taka + Vat</p>
                    </div>
                </div>

                <p className='border-b border-dashed border-[#0F0F0F33] mb-5'></p>
                    <button onClick={() => {
                        removeBookings(registrationNumber),
                            setDisplayBooking(getBookings)
                    }} className="relative cursor-pointer rounded-4xl font-bold w-full px-5 py-2.5 overflow-hidden border border-[#FF0000] bg-white relative text-[#FF0000] transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Cancel Appointment</span>
                    </button>
            </div>



        </div>
        </>
    );
};

export default AppoinmentCard;
