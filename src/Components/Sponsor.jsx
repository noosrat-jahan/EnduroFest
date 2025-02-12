import React from "react";

import brac from "../assets/brac.png";
import jago from "../assets/jago.webp";
import ovijatric from "../assets/ovijatric.jpg";
import robi from "../assets/robi.png";
import scb from "../assets/scb.png";
import redcris from "../assets/redcrisent.png";
import brick from "../assets/brick.jpg";
import jamuna from "../assets/jamuna.png";
import Marquee from "react-fast-marquee";

const Sponsor = () => {
  return (
    <div>
      <section className="bg-blue-100 dark:bg-slate-900  py-16 px-5">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-title">
            Our Awesome <span className="text-title">Sponsors & Partners</span>
          </h2>
          <p className="text-gray-700 dark:text-white mt-4">
            Let's Build Together
          </p>
        </div>

        {/* Sponsor Grid */}
        <div className=" mx-auto">
          {/* Sponsor Cards */}
          <Marquee>
            <div className="flex mr-5 items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <img
                src={brac}
                alt="Aerolan"
                className="max-h-16 object-contain"
              />
            </div>

            <div className="flex  mr-5  items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <img
                src={jago}
                alt="Architec"
                className="max-h-16 object-contain"
              />
            </div>
            <div className="flex mr-5 items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <img
                src={ovijatric}
                alt="Fitflex"
                className="max-h-16 object-contain"
              />
            </div>
            <div className="flex mr-5 items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <img
                src={robi}
                alt="Savory"
                className="max-h-16 object-contain"
              />
            </div>
            <div className="flex mr-5 items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <img src={scb} alt="Sereya" className="max-h-16 object-contain" />
            </div>
            <div className="flex mr-5 items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <img
                src={redcris}
                alt="Shopliv"
                className="max-h-16 object-contain"
              />
            </div>
            <div className="flex mr-5 items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <img
                src={brick}
                alt="Tecon"
                className="max-h-16 object-contain"
              />
            </div>
            <div className="flex mr-5  items-center justify-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
              <img
                src={jamuna}
                alt="Urdent"
                className="max-h-24 w-52 object-contain"
              />
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Sponsor;
