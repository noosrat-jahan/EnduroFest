import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MarathonCard from './MarathonCard';
import { Helmet } from 'react-helmet';

const Marathons = () => {
    const LoadedMarathons = useLoaderData()
    console.log(LoadedMarathons);

    const [allMarathons, setmyMarathons] = useState(LoadedMarathons)
    
    
    const handleSort = () => {
        console.log(allMarathons);
        const sortedMarathon = [...allMarathons].sort((a, b) => new Date((a.CreatedAt)) - new Date((b.CreatedAt)))
        setmyMarathons(sortedMarathon)
        console.log(sortedMarathon);
    }

    return (

        <div>
            <Helmet>
                <title>All Marathon - EnduroFest</title>
            </Helmet>
            <div className=' my-10 bg-[#e4f6e7] dark:bg-slate-800 rounded-[52px] px-8 py-10'>
                <h1 className='lg:text-6xl text-5xl text-center my-10  text-title uppercase font-bebas px-1'>Discover Your Next Marathon Challenge</h1>
                <button onClick={handleSort} className='bg-purple-800 lg:px-4 px-2 py-2 my-5 text-white font-semibold rounded-md '>Sort By Date</button>
                <div className='mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        allMarathons.map(marathon => <MarathonCard key={marathon._id} marathon={marathon} ></MarathonCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Marathons;