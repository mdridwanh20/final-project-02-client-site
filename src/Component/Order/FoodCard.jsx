import React from 'react'

export default function FoodCard({ foods }) {
    const { name, image, price, recipe } = foods;

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg border bg-white">
                {/* Product Image */}
                <div className="relative">
                    <img
                        className=""
                        src={image} // Replace with your image URL
                        alt="Product"
                    />
                    <span className="absolute top-2 right-2 bg-black text-white text-sm font-semibold py-1 px-2 rounded">
                        {price}
                    </span>
                </div>

                {/* Product Details */}
                <div className="p-4 text-center">
                    <h2 className="text-lg font-semibold mb-2">{name}</h2>
                    <p className="text-gray-600 text-sm mb-4">
                        {recipe}
                    </p>
                    <button className="bg-gray-100 border-0 border-b-2 border-[#BB8506] text-[#BB8506] hover:bg-black hover:text-white  py-2 px-4 rounded-xl shadow-md font-normal">
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    )
}
