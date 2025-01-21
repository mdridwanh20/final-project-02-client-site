import React, { useState } from 'react'
import Cover from '../Share-Component/Cover'
import orderCover from '../assets/shop/order shop banner.jpg'
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useMenu from '../Hooks/useMenu';
import OrderTab from '../Component/Order/OrderTab';
import { useParams } from 'react-router-dom';


export default function Order() {

  // category
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
  const { category } = useParams()
  const initialIndex = categories.indexOf(category)

  // tab related work here
  const [tabIndex, setTabIndex] = useState(initialIndex)
  const [menu] = useMenu()

  // data load by by 'order' route 

  console.log(category);

  // filter from useMenu
  const desserts = menu.filter((item) => item.category === 'dessert')
  const soup = menu.filter((item) => item.category === 'soup')
  const salad = menu.filter((item) => item.category === 'salad')
  const pizza = menu.filter((item) => item.category === 'pizza')
  const drinks = menu.filter((item) => item.category === 'drinks')

  return (
    <div>
      <Cover
        CoverImg={orderCover}
        title={'OUR SHOP'}
        description={'would you like to try a dish'}>
      </Cover>


      <div className='container py-16 m-auto flex items-center justify-center px-3'>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList >

            <div className=' text-center'>
              <Tab> Salad </Tab>
              <Tab> Pizza </Tab>
              <Tab> Soups </Tab>
              <Tab> Desserts </Tab>
              <Tab> Drinks </Tab>
           </div>

          </TabList>

          <TabPanel>
            <OrderTab foods={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab foods={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab foods={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab foods={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab foods={drinks}></OrderTab>
          </TabPanel>

        </Tabs>

      </div>

    </div>
  )
}
