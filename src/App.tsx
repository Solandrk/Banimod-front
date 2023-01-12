import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { Button, Carousel } from "react-bootstrap";
import Slider from "./Slider";
import CardComponent from "./CardComponent";
import CustomButton from "./CustomButton";
import News from "./News";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
function App() {
  return (
    <div className="flex flex-1 flex-col bg-white ">
      {/* Discount  */}
      <div className="w-full h-12 bg-blue-500">
        <img
          className="w-full h-full object-cover"
          src="https://www.banimode.com/img/cms/011022/1673521854.gif"
        />
      </div>
      {/* Title + Search box */}
      <div className="flex w-full h-20 px-10 ">
        <div className="flex flex-1 flex-row items-center">
          <img
            className="mr-6 ml-4"
            src="https://www.banimode.com//themes/new/assets/images/banilogo.svg"
          />
          {/* Search Box */}
          <div className="flex-1 py-2 pl-4 pr-12 relative mr-24 flex-row h-12  bg-gray-200 rounded-full ">
            <div className="top-3 absolute right-4  w-6 h-6 rounded-lg ">
              <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" />
            </div>
            <input
              placeholder="جستجو در میان بیش از 500 برند معتبر"
              className="w-full text-end  h-full bg-transparent stroke-transparent "
            ></input>
          </div>
          {/* Login */}
          <div
            style={{
              backgroundColor: "#00bf6f",
            }}
            className="flex mr-4 px-6 h-11 rounded-full items-center justify-center "
          >
            <p className=" text-base text-white">ورود / ثبت نام</p>
          </div>
          {/* Shop Icon  */}
          <div className="h-8 w-8 rounded-lg mr-4">
            <img src="https://cdn-icons-png.flaticon.com/512/5337/5337564.png"></img>
          </div>
        </div>
      </div>
      {/* Navigation Bar */}
      <div className="w-full h-28 bg-gray-200 "></div>
      {/* Body */}
      <div className="flex flex-col w-full  ">
        {/* Banners */}
        <div className="flex w-full px-8">
          {/* Banner */}
          <div className="flex flex-col">
            <div className="flex flex-row px-4 pt-3 justify-around">
              <img
                className="w-1/3 rounded-lg mr-3 "
                src="https://www.banimode.com/img/cms/011017/1673116012.jpg"
              ></img>
              <img
                className="w-2/3 rounded-lg "
                src="https://www.banimode.com/img/cms/011017/1673115996.jpg"
              ></img>
            </div>
            <div className="flex flex-row px-4 pt-3 justify-around mt-2">
              {/* Slider */}
              <div className="flex w-2/3 mr-4">
                <Slider></Slider>
              </div>
              <img
                className="w-1/3 rounded-lg "
                src="https://www.banimode.com/img/cms/011017/1673116358.jpg"
              ></img>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex w-full  flex-row justify-between px-10 mt-6">
          <img
            src="https://www.banimode.com/img/cms/011010/1672500063.jpg"
            className="w-40 h-36 bg-black rounded-xl"
          ></img>
          <img
            src="https://www.banimode.com/img/cms/011010/1672499973.jpg"
            className="w-40 h-36 bg-black rounded-xl"
          ></img>
          <img
            src="https://www.banimode.com/img/cms/011010/1672499963.jpg"
            className="w-40 h-36 bg-black rounded-xl"
          ></img>
          <img
            src="https://www.banimode.com/img/cms/011010/1672499899.jpg"
            className="w-40 h-36 bg-black rounded-xl"
          ></img>
          <img
            src="https://www.banimode.com/img/cms/011010/1672499885.jpg"
            className="w-40 h-36 bg-black rounded-xl"
          ></img>
          <img
            src="https://www.banimode.com/img/cms/011010/1672499565.jpg"
            className="w-40 h-36 bg-black rounded-xl"
          ></img>
        </div>

        {/* Products */}
        {/* Special Products */}
        <div className="flex flex-col w-full px-10">
          <div className="flex w-full items-center flex-row  mt-10">
            {/* Timer Container */}
            <div>
              <p className="text-xl font-medium text-green-600">
                زمان باقی مانده تا پایان سفارش
              </p>
              {/* Timer */}
            </div>
            <div className="flex flex-1  justify-end">
              <img
                className=" w-64"
                src="https://www.banimode.com/img/cms/010912/1670058721.png"
              ></img>
            </div>
          </div>
          {/* Slide Bar */}
          <div className="flex w-full mt-6  h-96">
            <ProductCard />
          </div>
          <CustomButton title={"مشاهده ی همه "} />
        </div>

        {/* Special Products */}
        <div className="flex flex-col w-full px-10 ">
          <div className="flex w-full items-center justify-center flex-row  mt-10">
            <p className="text-3xl text-black font-medium">
              پرفروش ترین محصولات
            </p>
          </div>
          {/* Slide Bar */}
          <div className="flex w-full mt-6 bg-gray-400 h-80"></div>
          <CustomButton title={"مشاهده ی همه "} />
        </div>
      </div>
      {/* تاییدیه ها  */}
      <div className="flex flex-row w-full px-10 pt-8 mt-6 justify-between">
        {/* Item */}
        <div className="flex flex-col w-1/5 h-64 items-center">
          <img src="https://www.banimode.com/img/cms/000719/1633949580.jpg"></img>
          <p className="text-lg text-gray-700 font-medium">
            ارسال سریع و رایگان
          </p>
          <p className="text-base text-center text-gray-600 ">
            ارسال رایگان برای خرید های بالای ۱ میلیون و ۲۰۰ هزار تومان و در زمان
            انتخابی مشتری به سریعترین شکل ممکن می باشد{" "}
          </p>
        </div>
        <div className="flex flex-col w-1/5 h-64 items-center">
          <img src="https://www.banimode.com/img/cms/000719/1633949551.jpg"></img>
          <p className="text-lg text-gray-700 font-medium">ضمانت اصالت</p>
          <p className="text-sm font-medium text-center text-gray-600 ">
            تمامی کالا ها اورجینال و با ضمانت اصل بودن از نمایندی معتبر تهیه و
            ارائه می شوند
          </p>
        </div>
        <div className="flex flex-col w-1/5 h-64  items-center">
          <img src="https://www.banimode.com/img/cms/000719/1633949531.jpg"></img>
          <p className="text-lg text-gray-700 font-medium">ضمانت بازگشت کالا</p>
          <p className="text-base text-center text-gray-600 ">
            تا ۱۵ روز برای احترام به انتخاب مشتریان کالای خریداری شده برگردانده
            می شود
          </p>
        </div>
        <div className="flex flex-col w-1/5 h-64 items-center">
          <img src="https://www.banimode.com/img/cms/000719/1633949430.jpg"></img>
          <p className="text-lg text-gray-700 font-medium">خدمات پس از خرید</p>
          <p className="text-base text-center text-gray-600 ">
            {" "}
            میزبان صدای گرمتان هستیم. هدف تیم پشتیبانی بانی مد تباش با تمام قوا
            برای ارائه بهترین خدمات به مشتریان عزیز میباشد{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full bg-gray-100 mt-24 pb-8">
        <p className="text-3xl font-medium text-center mt-8">
          {" "}
          برترین برندها در بانی مد
        </p>
        <div className="w-full h-12 bg-white mt-4 "></div>
        <CustomButton title={"مشاهده ی همه برند ها"} />
      </div>

      <div className="flex flex-col mt-16 px-10">
        <p className="text-3xl text-black font-medium text-center ">
          جدیدترین بانی مد
        </p>
        <div className="flex flex-row justify-between w-full mt-4">
          <CardComponent
            title={"لیست سیسمونی نوزاد پسر و دختر "}
            imageUrl={
              "https://www.banimode.com/blog/wp-content/uploads/2022/11/Sesame-list-of-baby-boys-and-girls-300x200.jpg"
            }
          />
          <CardComponent
            title={"شب یلدا چیست ؟ "}
            imageUrl={
              "https://www.banimode.com/blog/wp-content/uploads/2021/12/TURMERICSAFFRON-1-300x200.jpg"
            }
          />
          <CardComponent
            title={"هدیه روز مادر"}
            imageUrl={
              "https://www.banimode.com/blog/wp-content/uploads/2023/01/banimode_MothersDay_gift-1-300x200.jpg"
            }
          />
          <CardComponent
            title={"روز مادر سال 1401"}
            imageUrl={
              "https://www.banimode.com/blog/wp-content/uploads/2023/01/mothersdaty-300x200.jpg"
            }
          />
        </div>
      </div>
      <News />
      <Footer />
    </div>
  );
}

export default App;
