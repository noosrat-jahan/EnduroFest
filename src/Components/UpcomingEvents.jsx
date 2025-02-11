import React from 'react';

const UpcomingEvents = () => {
    return (
        <div className="bg-bgprimary mt-10 py-10">
            <div className="max-w-6xl mx-auto px-5">
                <h2 className="text-3xl text-title font-bold text-center mb-8">
                    Upcoming Marathon Events
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/4PP4n26/tim-swaan-e-Opewngf68w-unsplash.jpg"

                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Forest Freedom Run</h3>
                            <p className="text-green-800 font-semibold">Location: Vancouver, Canada</p>
                            <p className="text-green-800 font-semibold">Distance: 10K</p>
                            <p className="text-green-800 font-semibold">Event Date: June 10, 2024</p>
                            <p className="text-green-800 font-semibold">Registration: April 15 - May 30</p>
                            <p className="text-gray-500 mt-3">
                                Run through lush green trails surrounded by nature.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/kQPs7pJ/race-5324594-1920.jpg"

                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Coastal Horizon Dash</h3>
                            <p className="text-green-800 font-semibold">Location: Miami, USA</p>
                            <p className="text-green-800 font-semibold">Distance: 15K</p>
                            <p className="text-green-800 font-semibold">Event Date: July 5, 2024</p>
                            <p className="text-green-800 font-semibold">Registration: May 1 - June 20</p>
                            <p className="text-gray-500 mt-3">
                                Experience the refreshing ocean breeze as you run.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/0YGGtf3/running-1944798-1920.jpg"

                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Urban Glow Run</h3>
                            <p className="text-green-800 font-semibold">Location: Tokyo, Japan</p>
                            <p className="text-green-800 font-semibold">Distance: 8K</p>
                            <p className="text-green-800 font-semibold">Event Date: July 20, 2024</p>
                            <p className="text-green-800 font-semibold">Registration: June 1 - July 10</p>
                            <p className="text-gray-500 mt-3">
                                A spectacular night run through Tokyo's illuminated streets.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/JkpjsYt/sports-4119570-1920.jpg"
                            alt="Mystic Mountain Dash"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Summit Serenity Sprint</h3>
                            <p className="text-green-800 font-semibold">Location: Banff, Canada</p>
                            <p className="text-green-800 font-semibold">Distance: 16K</p>
                            <p className="text-green-800 font-semibold">Event Date: May 10, 2024</p>
                            <p className="text-green-800 font-semibold">Registration: March 20 - April 30</p>
                            <p className="text-gray-500 mt-3">
                                A breathtaking run through Banff's mountain trails.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/prKTqLr/sunset-5560658-1920.jpg"

                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Golden Shore Challenge</h3>
                            <p className="text-green-800 font-semibold">Location: Bondi Beach, Australia</p>
                            <p className="text-green-800 font-semibold">Distance: 8K</p>
                            <p className="text-green-800 font-semibold">Event Date: May 30, 2024</p>
                            <p className="text-green-800 font-semibold">Registration: April 5 - May 15</p>
                            <p className="text-gray-500 mt-3">
                                Start your day with a serene run along Bondi Beach.
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/QHw7tJ1/audience-1853662-1920.jpg"

                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">Unity Stride Festival</h3>
                            <p className="text-green-800 font-semibold">Location: Berlin, Germany</p>
                            <p className="text-green-800 font-semibold">Distance: 25K</p>
                            <p className="text-green-800 font-semibold">Event Date: January 30, 2025</p>
                            <p className="text-green-800 font-semibold">
                                Registration: November 25, 2024 - January 5, 2025
                            </p>
                            <p className="text-gray-500 mt-3">
                                Celebrate diversity and unity with runners from across the globe
                                in Berlin.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;