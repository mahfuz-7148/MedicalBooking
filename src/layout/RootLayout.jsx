import React from 'react';
import Navbar from "../components/Navbar.jsx";
import { Outlet } from "react-router";
import Footer from "../pages/Footer.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Suspense } from "react";

const RootLayout = () => {
    const hideFooterRoutes = ['/contact'];
    const [spinner, setSpinner] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setSpinner(true);
        const timer = setTimeout(() => setSpinner(false), 1000);
        return () => clearTimeout(timer);
    }, [location.key]);

    const isNotFoundPage = location.pathname !== '/' &&
        location.pathname !== '/bookings' &&
        location.pathname !== '/blogs' &&
        location.pathname !== '/contact' &&
        !location.pathname.startsWith('/doctor/');

    const shouldHideFooter = hideFooterRoutes.includes(location.pathname) || isNotFoundPage;

    return (
        <div className='bg-[#EFEFEF] jakarta'>
            <Navbar />
            <div className='min-h-[calc(100vh-433px)]'>
                <div className='max-w-screen-2xl mx-auto px-2 md:px-1'>
                    {spinner ? (
                        <div className='flex justify-center items-center min-h-[calc(100vh-8rem)]'>
                            <div className="spinner-8 relative w-12 h-12 bg-blue-600 rounded-full animate-spin text-white">
                                <div className="absolute w-3 h-3 bg-current rounded-full top-2.5 left-1.5 shadow-[25px_2px_0_0_currentColor,10px_22px_0_0_currentColor]"></div>
                            </div>
                        </div>
                    ) : (
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    )}
                </div>
            </div>
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

export default RootLayout;