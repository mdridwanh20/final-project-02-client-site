import React from 'react'
import PopularItem from '../../Share-Component/PopularItem'
import Cover from '../../Share-Component/Cover'
import { Link } from 'react-router-dom'

export default function MenuCategory({ items, title, CoverImage, description }) {

  return (
    <div>

      {
        title &&
        <Cover
          CoverImg={CoverImage}
          title={title}
          description={description}>
        </Cover>
      }

      <div className='max-w-4xl py-10 grid lg:grid-cols-2 gap-x-5 m-auto px-3:'>
        {
          items.map((data) => <PopularItem
            key={data._id}
            data={data}
          ></PopularItem>)
        }
      </div>

      <div className='container py-8 m-auto px-3 text-center'>

        <Link to={`/order/${title}`}>
          <button
            className='btn h-8 min-h-10 my-5 rounded-sm hover:text-white btn-outline text-black border'>Order Your Favorite
          </button>
        </Link>

      </div>

    </div>
  )
}
