import React from 'react'
import Order_Card_Swiper from '../Component/Home/Order_Card_Swiper'

import SecondMenu from '../Component/Home/SecondMenu'
import Testimonials from '../Component/Home/Testimonials'
import { Helmet } from 'react-helmet-async'
import Banner from '../Component/Home/Banner'
import Section_title from '../Share-Component/Section_title'
import PopularMenu from '../Component/Home/PopularMenu'


export default function Home() {
  return (

    <div>

        <div>
          <Helmet>
            <title>Bistro | | Home</title>
          </Helmet>
        </div>



      <Banner></Banner>
      <Section_title></Section_title>



      <Order_Card_Swiper></Order_Card_Swiper>
      <PopularMenu></PopularMenu>


      <SecondMenu></SecondMenu>

      
      <Testimonials></Testimonials>
    </div>
  )
}
