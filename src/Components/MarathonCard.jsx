import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';

const MarathonCard = ({marathon}) => {
    return (
        <div className='bg  flex items-center gap-3 border border-gray-300 shadow-md p-5'>
            <div className='space-y-3'>
                <h1 className='text-3xl font-bold uppercase font-roboto'>{marathon.title}</h1>
                <h3 className='font-semibold text-lg text-teal-800'>{marathon.location}</h3>
                <p>{marathon.regStartDate}</p>
                <p>{marathon.regEndDate}</p>

                <button className='bg-yellow-300 font-bold font-roboto uppercase px-4 py-2 flex items-center gap-3'>See Details <GoArrowRight /></button>
            </div>

            <img src={marathon.image} alt="" className='w-2/5 h-2/3' />
        </div>
    );
};

export default MarathonCard;