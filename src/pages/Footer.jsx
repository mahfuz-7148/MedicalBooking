import React from 'react';
import {Link, NavLink} from "react-router";
import logo from "../assets/logo.png";
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-white text-black p-20">
            <aside>
                <div className='flex items-center'>
                    <NavLink className='hidden md:block' to='/'><img src={logo} alt="" /></NavLink>
                    <NavLink className='btn btn-ghost text-4xl p-1 md:px-4' to='/'>DocTalk</NavLink>
                </div>
                <nav className="grid grid-flow-col gap-4 mt-5 text-base md:text-lg">
                    <NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/bookings'>My-Bookings</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/blogs'>Blogs</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'text-black border-b-2 rounded-none' : ''} to='/contact'>Contact Us</NavLink>
                </nav>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to='https://www.facebook.com/mahfuzur.rahman.shanto.449975'>
                        <i className="ri-facebook-circle-fill text-3xl text-blue-500"></i>
                    </Link>
                    <Link to='https://www.linkedin.com/in/mahfuzur-rahman-shanto/'>
                        <i className="ri-linkedin-box-fill text-3xl text-[#2489BE]"></i>
                    </Link>
                    <Link to='https://www.youtube.com/@stackprocoder'>
                        <i className="ri-youtube-fill text-3xl text-red-600"></i>
                    </Link>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;