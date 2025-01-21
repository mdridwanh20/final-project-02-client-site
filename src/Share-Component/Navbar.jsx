import React from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import '../Component/Style/style.css'


export default function Navbar() {
  return (

    <Headroom>
      <div className="z-10 w-full bg-[#980B09] shadow-lg">
        <div className="navbar flex items-center justify-between container m-auto">
          <div className="lg:navbar-start flex items-center">

            <div className="dropdown">

              <div tabIndex={0} role="button" className="p-2 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>


              <ul
                tabIndex={0}
                className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >

                <li className="rounded-sm mx-1 whitespace-nowrap">
                  <NavLink to='/'>HOME</NavLink>
                </li>

                <li className="rounded-sm mx-1 whitespace-nowrap">
                  <NavLink to='/our-menu'>OUR MENU</NavLink>
                </li>

                <li className="rounded-sm mx-1 whitespace-nowrap">
                  <NavLink to='/dash-board'>DASHBOARD</NavLink>
                </li>

                <li className="rounded-sm mx-1 whitespace-nowrap">
                  <NavLink to='/order/salad'>ORDER</NavLink>
                </li>

                <li className="rounded-sm mx-1 whitespace-nowrap">
                  <NavLink to='/contact-us'>CONTACT US</NavLink>
                </li>

              </ul>


            </div>


            <Link to="/" className="font-bold lg:text-xl text-white">
              BISTRO BOSS
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">

            <ul className="menu-horizontal text-gray-300 space-x-5">

              <li className="rounded-sm mx-1 whitespace-nowrap">
                <NavLink to='/'>HOME</NavLink>
              </li>

              <li className="rounded-sm mx-1 whitespace-nowrap">
                <NavLink to='/our-menu'>OUR MENU</NavLink>
              </li>

              <li className="rounded-sm mx-1 whitespace-nowrap">
                <NavLink to='/dash-board'>DASHBOARD</NavLink>
              </li>

              <li className="rounded-sm mx-1 whitespace-nowrap">
                <NavLink to='/order/salad'>ORDER</NavLink>
              </li>

              <li className="rounded-sm mx-1 whitespace-nowrap">
                <NavLink to='/contact-us'>CONTACT US</NavLink>
              </li>

            </ul>
          </div>

          <div className="lg:navbar-end flex items-center space-x-3 justify-end">
            <p className="text-white">Login</p>

            <p className="text-white">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </Headroom>

  );
}
