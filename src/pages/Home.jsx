import React from 'react';
import Banner from "../components/Banner.jsx";
import {useLoaderData} from "react-router";
import Bookings from "./Bookings.jsx";
import Countup from "../components/Countup.jsx";


const Home = () => {
    const data = useLoaderData()
    // console.log(data)

    return (
        <div>
            <Banner />
            <Bookings data={data}/>
            <Countup />
        </div>
    );
};

export default Home;