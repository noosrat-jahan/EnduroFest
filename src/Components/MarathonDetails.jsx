import { format } from 'date-fns';
import React from 'react';
import { FaPersonWalking } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router-dom';

const MarathonDetails = () => {

    const Marathondetails = useLoaderData()
    console.log(Marathondetails);

    return (
        <div className='w-10/12 mx-auto my-10 space-y-2'>
            <h1 className='text-3xl font-bold uppercase font-roboto mb-3'>{Marathondetails.title}</h1>

            <div className='flex items-center gap-3 justify-between flex-wrap'>
                <h3 className='font-semibold text-xl text-teal-800 flex items-center gap-2 '><IoLocationSharp /> {Marathondetails.location}</h3>

                <h3 className='flex items-center gap-2 font-semibold text-black '><LuCalendarDays /> Registration Start: {format(Marathondetails.regStartDate, 'MMMM do, yyyy')}</h3>
                <h3 className='flex items-center gap-2  font-semibold text-black '><LuCalendarDays /> Registration Ends: {format(Marathondetails.regEndDate, 'MMMM do, yyyy')}</h3>
                <h3 className='flex items-center gap-2  font-semibold text-black '><FaPersonWalking /> Full Marathon</h3>
            </div>
            <img src={Marathondetails.image} alt="" className='w-full' />

            <h1 className='text-5xl font-bold uppercase font-roboto py-5 '>Join {Marathondetails.title} 2025</h1>

            <p className='text-[#353e44] text-lg font-roboto pb-10'>{Marathondetails.details}</p>

            <Link to="/marathon-register" className='uppercase bg-[#00c282] text-white font-bold rounded-lg 
            px-10 py-4'>Register</Link>

        </div>
    );
};

export default MarathonDetails; 