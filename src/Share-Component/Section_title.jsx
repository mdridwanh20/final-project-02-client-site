import React from 'react'

export default function Section_title({subHeading, heading}) {
  return (
    <div className='max-w-sm py-7 m-auto px-3'>
            <div className='text-center pb-5'>
                <p className='text-yellow-600 uppercase italic '>  {subHeading} </p>
                <p className='text-4xl uppercase  '>{heading}</p>
            </div>
    </div>
  )
}
