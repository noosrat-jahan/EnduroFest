import React from 'react';
import logo from "../assets/Logoo.png"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-start">
                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div> */}
                <img src={logo} alt="" className='w-1/4' />
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div> */}
            <div className="navbar-end gap-3">
                <Link to="all-marathons" className='text-gray-700 lg:text-xl text-sm font-semibold'>Marathons</Link>
                <Link to="/login" className='bg-[#36388b] lg:px-4 px-3 py-2 rounded-md text-white text-xs lg:text-lg font-bold'>Login</Link>
                <Link to="/register" className='bg-pink-500 lg:px-4 px-3 py-2 rounded-md text-white font-bold text-xs lg:text-lg'>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;