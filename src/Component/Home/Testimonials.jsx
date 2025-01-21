import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Section_title from '../../Share-Component/Section_title';

// import { Rating } from 'flowbite-react';

export default function Testimonials() {

    const [review, setReview] = useState([])
    useEffect((data) => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => setReview(data))
    }, [])
    console.log(review);



    return (
        <div className='container m-auto px-3 py-16'>

            <Section_title
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}></Section_title>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper s">

                {
                    review.map((data) =>

                        <SwiperSlide key={data._id}>

                            <div className='flex items-center py-4 justify-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={data.rating}
                                    readOnly
                                />
                            </div>

                            <div >
                                <p className='max-w-2xl m-auto'>{data.details}</p>
                                <h2 className='font-medium '>{data.name}</h2>
                            </div>

                        </SwiperSlide>)
                }


            </Swiper>
        </div>
    )
}
