import React from "react";

function News() {
  return (
    <div className="flex flex-col w-full bg-gray-100">
      <p className="text-center text-3xl text-black mt-4">
        ثبت نام در خبرنامه بانی مد
      </p>
      <p className="text-center text-lg mt-2 text-medium">
        اولین نفری باشید که از جدیدترین محصولات,جشنواره ها و فروش های ویژه
      </p>
      <div className="flex w-2/3 py-2 px-4  bg-white rounded-full  self-center flex-row  mt-6">
        <div className="flex w-1/5 flex-row h-14 rounded-full bg-green-500 mr-4 px-4 items-center">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_555241.png"
            className="w-6 h-3 rounded-4 rotate-180"
          ></img>
          <p className="text-white text-xl text-right flex-1 ">ارسال</p>
        </div>
        <div className="flex-1 h-14 py-2 pl-4 pr-12 relative flex-row bg-gray-100 rounded-full ">
          <div className="top-3 absolute right-4  w-6 h-6 rounded-lg "></div>
          <input
            placeholder="آدرس ایمیل شما"
            className="w-full text-end  h-full bg-transparent stroke-transparent "
          ></input>
        </div>
      </div>
    </div>
  );
}

export default News;
