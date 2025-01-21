import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import '../Style/style.css';

// import required modules
import { Pagination } from 'swiper/modules';

import Slide1 from '../../assets/home/slide1.jpg'
import Slide2 from '../../assets/home/slide2.jpg'
import Slide3 from '../../assets/home/slide3.jpg'
import Slide4 from '../../assets/home/slide4.jpg'
import Slide5 from '../../assets/home/slide5.jpg'
import Section_title from '../../Share-Component/Section_title';





export default function Order_Card_Swiper() {
    return (

        <div className='max-w-2xl m-auto px-3 pb-10'>

                <Section_title 
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
                > 
                </Section_title>

            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper py-"
            >
                <SwiperSlide ><img className='rounded-lg shadow-md' src={Slide1} alt="" /></SwiperSlide>
                <SwiperSlide ><img className='rounded-lg shadow-md' src={Slide2} alt="" /></SwiperSlide>
                <SwiperSlide ><img className='rounded-lg shadow-md' src={Slide3} alt="" /></SwiperSlide>
                <SwiperSlide ><img className='rounded-lg shadow-md' src={Slide4} alt="" /></SwiperSlide>
                <SwiperSlide ><img className='rounded-lg shadow-md' src={Slide5} alt="" /></SwiperSlide>
                
            </Swiper>
        </div>
    )
}
