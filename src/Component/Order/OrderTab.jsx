import React from 'react'
import FoodCard from './FoodCard'

export default function OrderTab({foods}) {
    return (
        <div className='container m-auto px-3'>
            
            <div className='grid py-3 grid-cols-3 gap-8'>
                {
                    foods.map((item) => <FoodCard
                        key={item._id}
                        foods={item}
                    ></FoodCard>)
                }
            </div>

        </div>
    )
}
