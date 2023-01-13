import React from "react";

function ProductCard({ name, discription, discount, price, imageUrl }) {
  return (
    <div className="flex flex-col w-4/5  bg-white ">
      <img src={imageUrl} className="w-full h-2/3 rounded-lg bg-gray-200"></img>
      <div className="w-full flex flex-col mt-3">
        <div className="flex-1 flex flex-row-reverse">
          <p className="text-lg text-black font-bold">{name}</p>
          <p className="text-sm flex-1"> {discount} تومان</p>
        </div>
        <div className="flex-1 flex flex-row-reverse mt-3">
          <p className="text-base text-gray-600 font-medium">{discription}</p>
          <p className="flex-1 text-sm text-green-500"> {price} تومان</p>
        </div>
      </div>
      <div className="w-full flex justify-end mt-4">
        <p
          style={{ borderWidth: 1 }}
          className="w-fit px-2 py-1 text-xs rounded-lg text-black border-gray-500 border-spacing-1 mr-2"
        >
          L
        </p>
        <p
          style={{ borderWidth: 1 }}
          className="w-fit px-2 py-1 text-xs rounded-lg text-black border-gray-500 border-spacing-1 mr-2"
        >
          H
        </p>
        <p
          style={{ borderWidth: 1 }}
          className="w-fit px-2 py-1 text-xs rounded-lg text-black border-gray-500 border-spacing-1"
        >
          XL
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
