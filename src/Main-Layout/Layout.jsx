import React from 'react'
import Navbar from '../Share-Component/Navbar'

import { Outlet } from 'react-router-dom'
import Footer from '../Share-Component/Footer'



export default function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
