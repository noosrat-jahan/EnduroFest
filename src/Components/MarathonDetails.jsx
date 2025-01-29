import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { FaPersonWalking } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { LuCalendarDays } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router-dom';
import { isWithinInterval } from "date-fns";
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useTimer } from 'react-timer-hook';

const MarathonDetails = ({ expiryTimestamp }) => {


    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


    const Marathondetails = useLoaderData()
    console.log(typeof Marathondetails.TotalRegistrationCount);

    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString()

        isWithinInterval(currentDate, {
            start: Marathondetails.regStartDate,
            end: Marathondetails.regEndDate
        }) && setIsRegistrationOpen(true)
    }, [isRegistrationOpen])

    return (
        <div>
            <Helmet>
                <title>MarathonDetails - EnduroFest</title>
            </Helmet>

            <div className='w-10/12 mx-auto my-10 space-y-4'>
                <h1 className='text-3xl font-bold uppercase font-roboto mb-3'>{Marathondetails.title}</h1>

                <div className='flex justify-between items-center'>
                <p className='bg-amber-100 p-3  rounded-lg lg:w-1/3  lg:text-xl font-bold text-green-800'>Total Registration Count : {Marathondetails.TotalRegistrationCount}</p>
                <div style={{ textAlign: 'center' }}>
                    <h1>react-timer-hook </h1>
                    <p>Timer Demo</p>
                    <div style={{ fontSize: '50px' }}>
                        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                    </div>
                    <p>{isRunning ? 'Running' : 'Not running'}</p>
                    {/* <button onClick={start}>Start</button> */}
                    {/* <button onClick={pause}>Pause</button> */}
                    {/* <button onClick={resume}>Resume</button> */}
                    <button onClick={() => {
                        // Restarts to 5 minutes timer
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + 300);
                        restart(time)
                    }}>Restart</button>
                </div>
                </div>
                <div className='flex items-center gap-3  justify-between flex-wrap'>
                    <h3 className='font-semibold text-xl text-teal-800 flex items-center gap-2 '><IoLocationSharp /> {Marathondetails.location}</h3>
                    <h3 className='flex items-center gap-2 font-semibold text-black '><LuCalendarDays /> Registration Start: {format(Marathondetails.regStartDate, 'MMMM do, yyyy')}</h3>
                    <h3 className='flex items-center gap-2  font-semibold text-black '><LuCalendarDays /> Registration Ends: {format(Marathondetails.regEndDate, 'MMMM do, yyyy')}</h3>
                    <h3 className='flex items-center gap-2  font-semibold text-black '><FaPersonWalking /> Full Marathon</h3>
                </div>
                <img src={Marathondetails.image} alt="" className='w-full' />

                <h1 className='text-5xl font-bold uppercase font-roboto py-5 '>Join {Marathondetails.title} 2025</h1>

                <p className='text-[#353e44] text-lg font-roboto pb-10'>{Marathondetails.details}</p>


                <Link
                    to={`/all-marathons/${Marathondetails._id}/register`}
                    className="uppercase bg-[#00c282] text-white font-bold rounded-lg 
                            px-10 py-4"
                    onClick={(e) => {
                        if (!isRegistrationOpen) {
                            e.preventDefault();
                            toast.error('Registration is currently closed. Please check back later.', { position: 'top-center' });
                        }
                    }}
                >
                    Register
                </Link>

                

                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default MarathonDetails; 