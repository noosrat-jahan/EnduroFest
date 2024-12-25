import React from 'react';
import Banner from './Banner';
// import HomePageMarathon from './HomePageMarathon';
import { useLoaderData } from 'react-router-dom';
import HomeMarathonCard from './HomeMarathonCard';
import UpcomingEvents from './UpcomingEvents';
import Review from './Review';

const Home = () => {

    const allMarathons = useLoaderData()
    console.log(allMarathons);
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-6xl text-center my-10  text-[#441752] uppercase font-bebas px-3'>Discover Marathon Events</h1>
            <div className='mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                {
                    allMarathons.map(marathon => <HomeMarathonCard key={marathon._id} marathon={marathon} ></HomeMarathonCard>)
                }
            </div>

            <UpcomingEvents></UpcomingEvents>

            <Review></Review>
        </div>
    );
};

export default Home;