import React from 'react';

import logo from '../assets/logo.png'
import {NavLink} from "react-router";

const Navbar = () => {
    return (
        <div className="navbar py-5 p-0 mx-auto px-8 lg:px-44">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu text-xl dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow">
                        <li><NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/'>Home</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/bookings'>My-Bookings</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/contact'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <NavLink className='hidden md:block' to='/'><img src={logo} alt="" /></NavLink>
                <NavLink className='btn btn-ghost text-4xl p-1 md:px-4' to='/'>DocTalk</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/'>Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/bookings'>My-Bookings</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/blogs'>Blogs</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/contact'>Contact Us</NavLink></li>

                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-white px-4 py-6 bg-[#176AE5] rounded-full text-lg">Emergency</a>
            </div>
        </div>
    );
};

export default Navbar;