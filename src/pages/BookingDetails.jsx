import React from 'react';
import {Link, useLoaderData, useParams} from "react-router";
import {addBookings} from "../utils/index.js";
import ErrorDetails from "../components/ErrorDetails.jsx";

const BookingDetails = () => {
    const data = useLoaderData()
    // console.log(data)

    const {id} = useParams()
    // console.log(id)
const doctorDetail = data.find(doctor => doctor.registrationNumber === id)
    if (! doctorDetail) {
        return <ErrorDetails id={id}/>
    }
    const {name, education, speciality, designation, workplace, fee, image} = doctorDetail || {}
    // console.log(single)


    return (
        <div>
            <div className='p-15 bg-white shadow-lg rounded-3xl mx-auto mt-6'>
                <h1 className='text-4xl text-center font-bold py-5'>Doctor’s Profile Details</h1>
                <p className='text-base text-center text-[#141414B3] font-normal'>Healing with Heart: Your Health, Our Mission.</p>
            </div>

            <div className="flex items-start p-6 bg-white shadow-lg rounded-lg  mx-auto mt-8">

                <div className="mr-4">
                    <img
                        src={image}
                        className="w-80 h-96 rounded-lg"
                    />
                </div>


                <div className="flex-1">

                    <h1 className="text-xl font-bold text-gray-800">
                        {name}
                    </h1>

                    <p>{education}</p>

                    <p className="text-sm text-gray-600">
                        {speciality}
                    </p>

                    <p>{designation}</p>
                    <p className="text-sm text-gray-600 mt-1">
                        Working at
                        <br />
                        <span className="font-medium">
                        {workplace}
                    </span>
                    </p>

                    <p className="text-sm text-gray-600 mt-2">
                        Consultation Fee: <span className="font-medium">Taka {fee} <span>(incl. Vat)</span><span>Per consultation</span></span>
                    </p>
                </div>

            </div>
            <div className='p-15 bg-white shadow-lg rounded-3xl mx-auto mt-6'>
                <h1 className='text-3xl text-center font-bold py-5'>Book an Appointment</h1>
                <p className='border-b border-dashed border-[#0F0F0F33]'></p>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-bold py-5'>Availability</h1>
                    <h1 className='badge badge-outline text-[#09982F] text-lg bg-[#176AE51A] p-4 font-semibold rounded-full'>Doctor Available Today</h1>
                </div>
                    <p className='border-b border-solid mb-5 border-[#0F0F0F33]'></p>
                    <h1 className='badge badge-outline text-[#FFA000] text-lg bg-[#FFA0001A] p-4 font-semibold rounded-full'><i class="ri-error-warning-line "></i> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</h1>

                <Link to='/bookings'>
                    <button onClick={() => addBookings(doctorDetail)} className="w-full mt-10 relative cursor-pointer rounded-4xl px-5 py-2.5 overflow-hidden border border-blue-700 group bg-white relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Book Appointment Now</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookingDetails;