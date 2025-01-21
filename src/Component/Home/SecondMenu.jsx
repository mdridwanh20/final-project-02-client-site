import React from 'react'
import '../Style/style.css'

import img from '../../assets/home/featured.jpg'
import Section_title from '../../Share-Component/Section_title'


export default function SecondMenu() {
  return (
    <div className='bg-image bg-fixed text-white lg:flex items-center justify-center flex-col'>

      <div>
        <Section_title
          className="text-white"
          subHeading={'---Check it out---'}
          heading={'FROM OUR MENU'}></Section_title>
      </div>

      <div className='lg:flex items-center justify-center'>
        <div>

          <img className='lg:w-72 rounded-sm' src={img} alt="" />
        </div>

        <div className="text-white p-6 max-w-md">

          <p className="text-sm">March 20, 2023</p>
          <h2 className="text-xl font-bold mt-2">WHERE CAN I GET SOME?</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi.
          </p>
          <button
            className="btn h-8 min-h-9 my-5 rounded-lg hover:bg-green-100 hover:text-black btn-outline text-white border-0 border-b-2">
            READ MORE
          </button>
        </div>

      </div>



    </div>
  )
}
