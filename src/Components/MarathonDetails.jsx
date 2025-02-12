import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { FaPersonWalking } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { Link, useLoaderData } from "react-router-dom";
import { isWithinInterval } from "date-fns";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { useTimer } from "react-timer-hook";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const MarathonDetails = () => {
  const Marathondetails = useLoaderData();
  const eventDate = Marathondetails.eventStartDate;
  console.log(Marathondetails.eventStartDate);
  console.log(typeof Marathondetails.TotalRegistrationCount);

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();

    isWithinInterval(currentDate, {
      start: Marathondetails.regStartDate,
      end: Marathondetails.regEndDate,
    }) && setIsRegistrationOpen(true);
  }, [isRegistrationOpen]);

  // for countdown timer

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    return { days, hours, minutes, seconds };
  };

  const calculateTimeLeft = (eventDate) => {
    const eventTime = new Date(eventDate).getTime();
    const currentTime = Date.now();
    const timeLeft = eventTime - currentTime;
    return timeLeft;
  };

  const remainingTime = calculateTimeLeft(eventDate);

  return (
    <div>
      <Helmet>
        <title>MarathonDetails - EnduroFest</title>
      </Helmet>

      <div className="w-11/12 mx-auto my-10 space-y-4">
        <h1 className="lg:text-3xl text-xl font-bold uppercase font-roboto mb-3">
          {Marathondetails.title}
        </h1>

        <div className=" flex lg:flex-row flex-col gap-28 lg:gap-0 justify-between items-center">
          <p className="bg-amber-100 p-3  rounded-lg   lg:text-xl font-bold text-green-800">
            Total Registration Count : {Marathondetails.TotalRegistrationCount}
          </p>

          <div className="lg:mr-32 ">
            <div className="bg-gray-100 flex justify-center rounded-lg shadow-lg mx-auto">
              {remainingTime > 0 ? (
                <CountdownCircleTimer
                  isSmoothColorTransition={true}
                  size={0}
                  isPlaying
                  duration={remainingTime / 1000}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[remainingTime / 10000, 6, 3, 0]}
                  onComplete={() => ({ shouldRepeat: true, delay: 1 })}
                >
                  {({ remainingTime }) => {
                    const { days, hours, minutes, seconds } =
                      formatTime(remainingTime);
                    return (
                      <div className="text-center pb-20 ">
                        <h1 className="text-green-900 font-bold text-xl ">
                          Event Starts In
                        </h1>
                        <div className="grid grid-cols-4 gap-16  items-center">
                          <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-orange-600">
                              {days}
                            </span>
                            <span className="text-sm text-black">Days</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-blue-600">
                              {hours}
                            </span>
                            <span className="text-sm text-black">Hours</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-2xl font-bold text-pink-600">
                              {minutes}
                            </span>
                            <span className="text-sm text-black">Minutes</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-black">
                              {seconds}
                            </span>
                            <span className="text-sm text-black">Seconds</span>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </CountdownCircleTimer>
              ) : (
                <p className="bg-amber-400 text-lg font-bold p-2 text-center">
                  Event completed! <br /> Stay tuned for the next one.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2  justify-between flex-wrap">
          <h3 className="font-semibold text-xl text-teal-800 flex items-center gap-2 ">
            <IoLocationSharp /> {Marathondetails.location}
          </h3>
          <h3 className="flex items-center gap-2  font-semibold text-black ">
            <FaPersonWalking /> Full Marathon
          </h3>
          <h3 className="flex items-center gap-2 font-semibold text-black ">
            <LuCalendarDays /> Registration Start:{" "}
            {format(Marathondetails.regStartDate, "MMMM do, yyyy")}
          </h3>
          <h3 className="flex items-center gap-2  font-semibold text-black ">
            <LuCalendarDays /> Registration Ends:{" "}
            {format(Marathondetails.regEndDate, "MMMM do, yyyy")}
          </h3>          
          
        </div>
        <img src={Marathondetails.image} alt="" className="w-full" />

        <h1 className="text-5xl font-bold uppercase font-roboto py-5 ">
          Join {Marathondetails.title} 2025
        </h1>

        <p className="text-[#353e44] text-lg font-roboto pb-10">
          {Marathondetails.details}
        </p>

        <Link
          to={`/all-marathons/${Marathondetails._id}/register`}
          className="uppercase bg-[#00c282] text-white font-bold rounded-lg 
                            px-10 py-4"
          onClick={(e) => {
            if (!isRegistrationOpen) {
              e.preventDefault();
              toast.error(
                "Registration is currently closed. Please check back later.",
                { position: "top-center" }
              );
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
