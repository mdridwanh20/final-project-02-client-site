import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="text-white ">

        <div className=" grid lg:grid-cols-2 ">
          {/* Contact Section */}

          <div className="p-8 text-center bg-[#1F2937]">
            <h4 className="text-lg font-semibold mb-2">CONTACT US</h4>
            <p>123 ABS Street, Unit 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>

          {/* Social Media Section */}
          <div className='p-8 flex items-center flex-col bg-[#111827]'>

            <h4 className="text-lg font-semibold">Follow US</h4>
            <p>Join us on social media</p>

            <div className="flex space-x-4 mt-2">

              <Link className='text-xl'>
                <BsFacebook />
              </Link>

              <Link className='text-xl'>
                <AiFillInstagram />
              </Link>

              <Link className='text-xl'>
                <FaTwitter />
              </Link>


            </div>

          </div>


        </div>


        {/* Copyright Section */}
        <div className="text-center py-3 border-t bg-black border-gray-700 ">
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
      </footer></div>
  )
}
