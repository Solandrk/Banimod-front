import React from "react";

function News() {
  return (
    <div className="flex flex-col w-full bg-gray-100">
      <p className="text-center text-2xl text-black mt-4">ثبت نام در خبرنامه بانی مد</p>
      <p className="text-center text-xl mt-2 text-medium">
        اولین نفری باشید که از جدیدترین محصولات,جشنواره ها و فروش های ویژه
      </p>
      <div className="flex flex-row justify-center w-full bg-white mt-6">
        <div className="flex flex-row w-1/5 h-14 rounded-full bg-green-600 mr-4">
          <p>ارسال</p>
          <img></img>
        </div>
        <div className="w-1/2 h-14 rounded-full bg-gray-500 "></div>
      </div>
    </div>
  );
}

export default News;
