import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles.css';

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='mb-10'>
            <Swiper
                autoplay={{
                    delay: 5000, // Delay between transitions (in milliseconds)
                    disableOnInteraction: false, // Autoplay will not stop after user interaction
                }}
                loop={true} // Enable looping
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className='bg one flex flex-col text-right '>
                    <div className='lg:ml-52 space-y-3 pr-2'>
                        <h1 className=' lg:text-7xl text-white font-bold text-right'>Join The <span className='text-yellow-200'>Race</span> <br /> Push Your <span className='text-yellow-200'>Limits</span></h1>
                        <p className='text-white text-right font-bold'>EnduroFest Marathon 2025 is more than just a test of <br /> endurance—it’s a celebration of human determination and resilience.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg two'>
                    <div className='lg:ml-52 space-y-3 pr-2'>
                        <h1 className=' lg:text-7xl text-white font-bold text-right'>Run <span className='text-yellow-200'>Beyond Limits,</span> <br /> Chase Your <span className='text-yellow-200'>Goals!</span></h1>
                        <p className='text-white text-right font-bold'>EnduroFest Marathon 2025 is more than just a test of <br /> endurance—it’s a celebration of human determination and resilience.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg three'>
                    <div className='lg:ml-52 space-y-3 pr-2'>
                        <h1 className=' lg:text-7xl text-white font-bold text-right'>Every <span className='text-yellow-200'> Step Counts, </span> <br /> Keep Moving<span className='text-yellow-200'>Forward!</span></h1>
                        <p className='text-white text-right font-bold'>EnduroFest Marathon 2025 is more than just a test of <br /> endurance—it’s a celebration of human determination and resilience.</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide className='bg four'>
                    <div className='lg:ml-52 space-y-3 pr-2'>
                        <h1 className=' lg:text-7xl text-white font-bold text-right'>Unleash  <span className='text-yellow-200'>Your Potential,</span> <br /> Run with <span className='text-yellow-200'>Passion!</span></h1>
                        <p className='text-white text-right font-bold'>EnduroFest Marathon 2025 is more than just a test of <br /> endurance—it’s a celebration of human determination and resilience.</p>
                    </div>

                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;