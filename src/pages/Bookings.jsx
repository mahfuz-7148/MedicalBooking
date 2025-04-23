import React, {useEffect, useState} from 'react';
import Booking from "../components/Booking.jsx";

const Bookings = ({data}) => {
    // console.log(data)
    const [displaydoctor, setDisplaydoctor] = useState([])
    const [viewAllDoctor, setViewAllDoctor] = useState()

    useEffect(() => {
        return viewAllDoctor ?
            setDisplaydoctor(data) :
            setDisplaydoctor(data.slice(0, 6))
    }, [data, viewAllDoctor]);
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Our Best Doctors</h1>
            <p className='mx-2 md:mx-2 text-base font-semibold text-center mt-5'>Our platform seamlessly connects you with verified, expert doctors across multiple specialties, tailored to your schedule. <br/> From routine checkups to urgent consultations, book appointments in minutes and access trusted, high-quality care effortlessly.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 mx-5'>
                {
                    displaydoctor.map(booking => (
                        <Booking booking={booking} />
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <button onClick={() => {
                    setViewAllDoctor(! viewAllDoctor)
                    return viewAllDoctor && window.scrollTo(0, 400)

                }} className="relative cursor-pointer rounded-4xl px-5 py-2.5 overflow-hidden border border-blue-700 group bg-[#176AE5] relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400  hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 text-white text-xl font-semibold mb-10 mt-10">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">{viewAllDoctor ? 'View Less Doctors' : 'View All Doctors'}</span>
                </button>
            </div>

        </div>
    );
};

export default Bookings;