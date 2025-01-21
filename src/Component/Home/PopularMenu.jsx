import React, { useEffect, useState } from 'react'
import Section_title from '../../Share-Component/Section_title'
import PopularItem from '../../Share-Component/PopularItem'
import useMenu from '../../Hooks/useMenu'


export default function PopularMenu() {

    // data load by custom hook;
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    console.log(popular);
    

  return (
    <div className='py-20'>
        <Section_title
        subHeading={'---Check it out---'}
        heading={'FROM OUR MENU'}
        >
        </Section_title>

        <div className='max-w-4xl  grid lg:grid-cols-2 gap-x-5 m-auto px-3:'>
            {
                popular.map((data) => <PopularItem 
                key={data._id}
                data={data}
                ></PopularItem>)
            }
        </div>

    </div>
  )
}
