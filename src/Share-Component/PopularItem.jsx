import React from "react";

export default function PopularItem({ data }) {
  // Destructure the data object
  const { name, image, price, recipe } = data;

  return (
    <div className="flex items-start gap-4 p-4 border-b border-gray-200">
      {/* Image Section */}
      <div
        className="w-14 h-14 bg-cover bg-center rounded-tr-3xl rounded-bl-3xl rounded-r-3xl bg-gray-300"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Content Section */}
      <div className="flex-1">
        {/* Title and Price */}
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-900 uppercase">
            {name} -------------------------
          </h2>
          <span className="text-yellow-600 font-semibold text-sm">
            ${price}
          </span>
        </div>

        {/* Recipe Description */}
        <p className="text-xs text-gray-600 mt-1 leading-5">{recipe}</p>
      </div>
    </div>
  );
}
