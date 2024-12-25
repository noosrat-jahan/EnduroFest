import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles.css';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
const Banner = () => {
    return (
        <div className='mb-10'>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className='bg one'></SwiperSlide>
                <SwiperSlide className='bg two'></SwiperSlide>
                <SwiperSlide className='bg three'></SwiperSlide>                
                <SwiperSlide className='bg four'></SwiperSlide>                
            </Swiper>
        </div>
    );
};

export default Banner;