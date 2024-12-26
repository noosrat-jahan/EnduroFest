import React from 'react';
import Banner from './Banner';
// import HomePageMarathon from './HomePageMarathon';
import { useLoaderData, useNavigation } from 'react-router-dom';
import HomeMarathonCard from './HomeMarathonCard';
import UpcomingEvents from './UpcomingEvents';
import Review from './Review';
import { Helmet } from 'react-helmet';


const Home = () => {


    const navigation = useNavigation()

    const allMarathons = useLoaderData()
    console.log(allMarathons);

    
    return (
        <div>
            <Helmet>
                <title>Home - EnduroFest</title>
            </Helmet>


            <Banner></Banner>
            
            <h1 className='text-6xl text-center my-10  text-[#441752] uppercase font-bebas px-3'>Discover Marathon Events</h1>

            {
                navigation.state === "loading" ?
                    <div className='flex justify-center'>
                        <span className=" loading loading-spinner text-pink-700 mt-10 w-10 mx-auto"></span>
                    </div>
                    :
                    <div className='mx-auto w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                        {
                            allMarathons.map(marathon => <HomeMarathonCard key={marathon._id} marathon={marathon} event={marathon.eventStartDate} ></HomeMarathonCard>)
                        }
                    </div>
            }


            <UpcomingEvents></UpcomingEvents>

            <Review></Review>
        </div>
    );
};

export default Home;