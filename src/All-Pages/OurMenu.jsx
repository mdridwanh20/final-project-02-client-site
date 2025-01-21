import React from 'react'
import Cover from '../Share-Component/Cover'
import From_menu from '../Component/Home/PopularMenu'

import CoverImage from '../assets/menu/banner3.jpg'
import DessertsImg from '../assets/menu/dessert-bg.jpeg'
import PizzaImg from '../assets/menu/pizza-bg.jpg'
import SaladImg from '../assets/menu/salad-bg.jpg'
import SoupImg from '../assets/menu/soup-bg.jpg'

import useMenu from '../Hooks/useMenu'
import Section_title from '../Share-Component/Section_title'
import MenuCategory from '../Component/OurMenu/MenuCategory'


export default function OurMenu() {

    const [menu] = useMenu()

    // data filter here. 
    const desserts = menu.filter((item) => item.category === 'dessert')
    const soup = menu.filter((item) => item.category === 'soup')
    const salad = menu.filter((item) => item.category === 'salad')
    const pizza = menu.filter((item) => item.category === 'pizza')
    const offered = menu.filter((item) => item.category === 'offered')


    return (
        <div>

            <Cover CoverImg={CoverImage} title={'OUR MENU'} description={'Would you like to try a dish'}></Cover>

            <Section_title subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></Section_title>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory
                title={'dessert'}
                CoverImage={DessertsImg}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                items={desserts}>
            </MenuCategory>


            <MenuCategory
                title={'salad'}
                CoverImage={SaladImg}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                items={salad}
            ></MenuCategory>

            <MenuCategory
                title={'soup'}
                description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                CoverImage={SaladImg}
                items={soup}
            >
            </MenuCategory>

        </div>
    )
}
