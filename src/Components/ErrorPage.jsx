import React from 'react';
import error from "../assets/404.png"
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
const ErrorPage = () => {
    return (
        <div className='flex items-center w-11/12 mx-auto'>
            <Link to="/" className='bg-blue-500 text-white font-bold flex items-center gap-3 text-2xl p-4 rounded'><AiOutlineHome /> Back To Home</Link>
            <img src={error} alt=""  className='w-1/2 mx-auto'/>            
        </div>
    );
};

export default ErrorPage;