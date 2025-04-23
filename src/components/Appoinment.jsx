import React, {useEffect, useState} from 'react';
import AppoinmentCard from "./AppoinmentCard.jsx";
import EmptyPart from "./EmptyPart.jsx";
import Chart from "./Chart.jsx";
import {getBookings} from "../utils/index.js";


const Appoinment = () => {
    const [displayBooking, setDisplayBooking] = useState([])

    useEffect(() => {
        setDisplayBooking(getBookings)
    }, []);

    return  displayBooking.length === 0 ?
         <EmptyPart/>

    : (
        <div>
         <Chart displayBooking={displayBooking}/>
            <div className='p-15 mx-auto mt-6'>
                <h1 className='text-4xl text-center font-bold py-5'>My Today Appointments</h1>
                <p className='text-base text-center text-[#141414B3] font-normal'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>
            {
                displayBooking.map(bookingDoctor => (
                    <AppoinmentCard  setDisplayBooking={setDisplayBooking} bookingDoctor={bookingDoctor}/>
                ))
            }




        </div>
    );
};

export default Appoinment;