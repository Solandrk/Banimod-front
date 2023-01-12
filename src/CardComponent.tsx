import React from "react";

function CardComponent({ title, imageUrl }) {
  return (
    <div className="w-56 rounded-lg ml-6 pb-6">
      <img className="w-full h-2/3" src={imageUrl}></img>
      <p className="w-full text-right font-medium text-base mt-6 hover:text-green-500">
        {title}
      </p>
    </div>
  );
}

export default CardComponent;
