import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MarathonCard from './MarathonCard';

const Marathons = () => {
    const LoadedMarathons = useLoaderData()
    return (
        <div className='mx-auto w-[95%] my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
             {
                LoadedMarathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon} ></MarathonCard>)
             }
        </div>
    );
};

export default Marathons;