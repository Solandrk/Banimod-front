import React from "react";

export default function List({ title, options }) {
  return (
    <div className="flex flex-col h-96 bg-white ">
      <div className="w-full flex flex-row ">
        <div className="h-56 text-base font-medium flex flex-col  text-end justify-between">
          {/* title */}
          <p className="text-gray-400 text-xl">{title}</p>
          {/* buttonse */}
          {options.map((item, index) => {
            if (index == 0) return <p className="mt-2 hover:text-green-500 hover:cursor-pointer">{item}</p>;
            else return <p className="hover:text-green-500 hover:cursor-pointer">{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
