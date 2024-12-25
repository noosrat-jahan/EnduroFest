import { format } from 'date-fns';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { IoLocationSharp } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const HomeMarathonCard = ({ marathon }) => {
    return (
        <div>
            <div className='bg border border-gray-300 shadow-md'>
                <div className='space-y-3 flex gap-3 pb-4'>
                    <div className='p-3  space-y-3'>
                        <h1 className='text-3xl font-bold uppercase font-roboto'>{marathon.title}</h1>
                        <h3 className='font-semibold text-xl text-teal-800 flex items-center gap-2'><IoLocationSharp /> {marathon.location}</h3>

                        <p className='flex items-center gap-2 font-semibold text-blue-800 '><LuCalendarDays /> Registration Start: {format(marathon.regStartDate, 'MMMM do, yyyy')}</p>
                        <p className='flex items-center gap-2 pb-10 font-semibold text-red-800 '><LuCalendarDays /> Registration Ends: {format(marathon.regEndDate, 'MMMM do, yyyy')}</p>

                        <Link to={`/all-marathons/${marathon._id}`} className='bg-yellow-300  font-bold font-roboto uppercase px-5 w-2/3  py-2 flex items-center gap-1 rounded-sm'>See Details <GoArrowRight /></Link>
                    </div>
                    <img src={marathon.image} alt="" className='w-1/2' />

                </div>
            </div>
        </div>
    );
};

export default HomeMarathonCard;