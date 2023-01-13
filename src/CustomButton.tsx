import React from "react";

function CustomButton({ title }) {
  return (
    <div
      style={{
        borderWidth: 1,
        fontFamily: "iranyekan" 
      }}
      className="flex items-center justify-center  h-12 px-16 mt-3 text-green-400 border-gray-400 font-medium text-lg self-center rounded-full hover:border-green-400 hover:cursor-pointer"
    >
      <p>{title}</p>
    </div>
  );
}

export default CustomButton;
