import { format } from "date-fns";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const HomeMarathonCard = ({ event, marathon }) => {
  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;

    return { days, hours, minutes, seconds };
  };

  const calculateTimeLeft = (event) => {
    const eventTime = new Date(event).getTime();
    const currentTime = Date.now();
    const timeLeft = eventTime - currentTime;
    return timeLeft;
  };

  const remainingTime = calculateTimeLeft(event);
 

  return (
    <div>
      <div className="bg border border-gray-300 shadow-md h-full">
        <div className=" flex flex-col-reverse lg:flex-row gap-3 pb-4">
          <div className="p-3  space-y-3">
            <h1 className="text-3xl font-bold uppercase font-roboto">
              {marathon.title}
            </h1>
            <h3 className="font-semibold text-xl text-teal-800 flex items-center gap-2">
              <IoLocationSharp /> {marathon.location}
            </h3>

            <p className="flex items-center gap-2 font-semibold text-blue-800 ">
              <LuCalendarDays /> Registration Start:{" "}
              {format(marathon.regStartDate, "MMMM do, yyyy")}
            </p>
            <p className="flex items-center gap-2 pb-20 font-semibold text-red-800 ">
              <LuCalendarDays /> Registration Ends:{" "}
              {format(marathon.regEndDate, "MMMM do, yyyy")}
            </p>

            {/* countdown  */}
            <div className="pb-16">
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
                              <span className="text-sm text-black">
                                Minutes
                              </span>
                            </div>
                            <div className="flex flex-col items-center">
                              <span className="text-3xl font-bold text-black">
                                {seconds}
                              </span>
                              <span className="text-sm text-black">
                                Seconds
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }}
                  </CountdownCircleTimer>                  
                )
                : 
                <p className="bg-amber-400 text-lg font-bold p-2 text-center">Event completed! <br /> Stay tuned for the next one.</p>
            }
              </div>
            </div>

            <div className="z-30">
              <Link
                to={`/all-marathons/${marathon._id}`}
                className="bg-yellow-300  font-bold font-roboto uppercase px-5 w-2/3 py-2 flex items-center gap-1 rounded-sm cursor-pointer"
              >
                See Details <GoArrowRight />
              </Link>
            </div>
          </div>
          <img src={marathon.image} alt="" className="lg:w-1/2  mt-0" />
        </div>
      </div>
    </div>
  );
};

export default HomeMarathonCard;
