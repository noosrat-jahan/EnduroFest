import React, { useContext } from 'react';
import logo from "../assets/Logoo.png"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { IconContext } from "react-icons";


const Navbar = () => {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }


    const { user, signoutUser } = useContext(AuthContext)
    const naviagte = useNavigate()

    const handleSignOut = () => {
        signoutUser()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have been logged out Successfully",
                    showConfirmButton: false,
                    timer: 3500
                });
                naviagte('/login')
            })

            .catch(err => {
                console.log('error:', err.message);
            })
    }

    return (
        <div className="navbar sticky top-0  shadow z-10 bg-base-100 bg-gradient-to-r from-pink-50 to-purple-100 px-4 py-3 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 space-y-3 p-4 shadow">

                        <NavLink to="/all-marathons" className=' bg-[#3E5879] text-white rounded-md lg:px-3 px-1.5 py-2 lg:text-xl text-xs font-bold'>Marathons</NavLink>

                        {
                            user &&
                            <NavLink to="/dashboard/my-marathon-list" className='bg-[#3E5879] text-white  rounded-md lg:px-3 px-2 py-2 lg:text-xl text-xs font-bold'>Dashboard</NavLink>
                        }

                        <NavLink to="/contact" className='bg-[#36388b] lg:px-4 px-2 py-2 rounded-md text-white text-xs lg:text-lg font-bold'>Contact</NavLink>
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="" className='w-1/2 lg:w-1/3 ' /></Link>
            </div>


            <div className="navbar-center lg:pr-6 lg:flex  gap-2">

                <ul className="menu hidden lg:flex menu-horizontal px-1 space-x-4">
                    <NavLink to="/" className=' bg-[#36388b] text-white rounded-md lg:px-3 px-1.5 py-2 lg:text-xl text-xs font-bold'>Home</NavLink>
                    
                    <NavLink to="/all-marathons" className=' bg-[#36388b] text-white rounded-md lg:px-3 px-1.5 py-2 lg:text-xl text-xs font-bold'>Marathons</NavLink>

                       {
                            user &&
                            <NavLink to="/dashboard/my-marathon-list" className='bg-[#36388b] text-white  rounded-md lg:px-3 px-2 py-2 lg:text-xl text-xs font-bold'>Dashboard</NavLink>
                        }

                        <NavLink to="/contact" className='bg-[#36388b] lg:px-4 px-2 py-2 rounded-md text-white text-xs lg:text-lg font-bold'>Contact</NavLink>
                        <NavLink to="/about" className='bg-[#36388b] lg:px-4 px-2 py-2 rounded-md text-white text-xs lg:text-lg font-bold'>About</NavLink>
                </ul>



                {
                    user ?
                        <div className='flex gap-5 items-center'>
                            {/* <NavLink to="/dashboard/my-marathon-list" className='bg-[#36388b] text-white  rounded-md lg:px-3 px-2 py-2 lg:text-xl text-xs font-bold'>Dashboard</NavLink> */}

                            {/* <h1>{user?.email}</h1> */}

                            <div className="dropdown w-16 h-16 block dropdown-hover">
                                <div tabIndex={0} role="button">
                                    <img
                                        src={user?.photoURL}
                                        className="w-16 h-16 rounded-full border border-gray-400" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-48 space-y-3 p-2 shadow right-0">
                                    <li><h1 className='text-lg font-semibold'>{user?.displayName}</h1></li>
                                    <li><Link to="/update-profile" className='bg-[#4fb5e1] lg:px-4 px-3 py-2 rounded-md text-white text-xs lg:text-lg font-bold'>Update Profile</Link></li>
                                    <li><Link to="/login" onClick={handleSignOut} className='bg-[#696be3] lg:px-4 px-3 py-2 rounded-md text-white text-xs lg:text-lg font-bold'>Log Out</Link></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='flex gap-3'>
                            <Link to="/login" className='bg-[#217276] lg:px-4 px-2 py-2 rounded-md text-white text-xs lg:text-lg font-bold'>Login</Link>
                            <Link to="/register" className='bg-pink-500 lg:px-4 px-2 py-2 rounded-md text-white font-bold text-xs lg:text-lg'>Register</Link>
                        </div>
                }


                <div>
                    <button onClick={() => darkModeHandler()}
                        className=' text-xl bg-blue-100 p-2 dark:text-black rounded-full ml-5'>
                        {

                            dark && <IoSunny />
                        }
                        {
                            !dark && <IoMoon />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


