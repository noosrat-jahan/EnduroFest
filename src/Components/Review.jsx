import React from "react";

import { motion } from "motion/react";

const Review = () => {
  return (
    <div>
      <div className="bg-[#e4f6e7] dark:bg-black py-10">
        <div className="w-11/12 grid lg:grid-cols-3 items-center gap-5 justify-evenly mx-auto px-5">
          <div className="col-span-1">
            <h2 className=" text-3xl text-green-800 uppercase font-extrabold text-left mb-8">
              What Our Participants Say
            </h2>
            <p className="text-black dark:text-white">
              Heartfelt testimonials from our participants, highlighting their
              experiences, growth, and the positive impact of being part of our
              events. These stories emphasize the sense of community,
              inspiration, and motivation that drives everyone toward achieving
              their fitness goals while forming meaningful connections.
            </p>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}

            <motion.div
              whileHover={{ rotate: -3 }} // Rotates 30 degrees clockwise on hover
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth effect
            >
              <div className="bg-[#bef2c6] text-black rounded-lg p-6 flex flex-col justify-between hover:rotate-6">
                <p className="text-lg italic mb-4 ">
                  "Joining the running club was a game-changer for me. I used to
                  struggle with consistency in my running routine, but the group
                  runs and support kept me going."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co.com/WWgmGWy/member1.png"
                    alt="John Doe"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-sm">Designer</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card 2 */}
            <motion.div
              whileHover={{ rotate: 3 }} // Rotates 30 degrees clockwise on hover
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth effect
            >
              <div className="bg-[#bef2c6] text-black h-full rounded-lg p-6 flex flex-col justify-between">
                <p className="text-lg italic mb-4">
                  "The events are so well-organized and fun! I've met amazing
                  people and improved my fitness journey significantly."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co.com/xHJ7NPf/member4.png"
                    alt="Jane Smith"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Jane Smith</h3>
                    <p className="text-sm">Photographer</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card 3 */}
            <motion.div
              whileHover={{ rotate: -3 }} // Rotates 30 degrees clockwise on hover
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth effect
            >
              <div className="bg-[#bef2c6] text-black rounded-lg p-6 flex flex-col justify-between">
                <p className="text-lg italic mb-4">
                  "This is the best marathon club ever! It has made running so
                  much more enjoyable for me."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://i.ibb.co.com/tLr0k3r/member3.png"
                    alt="Mark Wilson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Mark Wilson</h3>
                    <p className="text-sm">Developer</p>
                  </div>
                </div>
                <div className="flex mt-4">
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                  <span className="text-yellow-400 text-lg">★</span>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Card 4 */}
            <motion.div
              whileHover={{ rotate: 3 }} // Rotates 30 degrees clockwise on hover
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth effect
            >
                <div className="bg-[#bef2c6] text-black rounded-lg p-6 flex flex-col justify-between">
              <p className="text-lg italic mb-4">
                "I love the sense of community here. Every event feels like a
                celebration of health and life."
              </p>
              <div className="flex items-center">
                <img
                  src="https://i.ibb.co.com/zXgcXyC/member2.png"
                  alt="Emily Johnson"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">Emily Johnson</h3>
                  <p className="text-sm">Writer</p>
                </div>
              </div>
              <div className="flex mt-4">
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
                <span className="text-yellow-400 text-lg">★</span>
              </div>
            </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
