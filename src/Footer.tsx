import React from "react";
import CustomButton from "./CustomButton";
import List from "./List";

function Footer() {
  return (
    <div className="flex flex-1 px-10 flex-col w-full h-96 bg-white mt-8 ">
      <div className="w-full flex flex-row ">
        <div className="flex flex-col w-56  items-start h-full ">
          <img
            className="w-44"
            src="https://www.banimode.com//themes/new/assets/images/banilogo.svg"
          ></img>
          {/* Button */}
          <div
            style={{
              borderWidth: 1,
            }}
            className="flex w-44 items-center justify-center  h-9 mt-4 text-green-500 border-green-500  text-sm  rounded-full hover:border-green-400 hover:cursor-pointer"
          >
            <p>دانلود اپلیکیشن</p>
            <img
              className="ml-2"
              src="https://www.banimode.com//themes/new/assets/images/app-download.svg"
            ></img>
          </div>
          <div className="flex w-full flex-row justify-around mt-8">
            <img
              src="https://www.banimode.com//themes/new/assets/images/footer-twitter.svg"
              style={{ borderWidth: 1.5 }}
              className="w-12 h-12 rounded-full border-black p-2"
            ></img>
            <img
              src="	https://www.banimode.com//themes/new/assets/images/footer-aparat.svg"
              style={{ borderWidth: 1.5 }}
              className="w-12 h-12 rounded-full border-black p-2"
            ></img>
            <img
              src="https://www.banimode.com//themes/new/assets/images/footer-telegram.svg"
              style={{ borderWidth: 1.5 }}
              className="w-12 h-12 rounded-full border-black p-2"
            ></img>
            <img
              src="https://www.banimode.com//themes/new/assets/images/footer-insta.svg"
              style={{ borderWidth: 1.5 }}
              className="w-12 h-12 rounded-full border-black p-2"
            ></img>
          </div>
        </div>
        <div className="flex flex-1 flex-row-reverse justify-between">
          <List
            options={[
              "خرید لباس",
              "لباس مردانه",
              "لباس زنانه",
              "لباس بچگانه",
              "خرید لوازم آرایشی",
            ]}
            title={"خرید"}
          ></List>
          <List
            options={[
              "پرسش های متداول",
              "شرایط بازگشت",
              "راهنمای خرید",
              "فروش B2B",
              "خرید لوازم آرایشی",
            ]}
            title={"خدمات مشتری"}
          ></List>
          <List
            options={[
              "درباره ما ",
              "قوانین و مقررات",
              "تماس با ما",
              "فرصت های شغلی ",
              "همکاری تجاری",
            ]}
            title={"اطلاعات بانی مد"}
          ></List>
          <div className="text-base pl-4 text-black text-right font-medium items-end justify-end">
            <p className="text-lg text-gray-700">میزبان صدای گرمتان هستیم</p>
            <p className="text-base mt-2">7 روز هفته ۲۴ ساعته</p>
            <p className="mt-4">تلفن :‌ 021-49215</p>
            <p className="mt-2">ایمیل :‌ customer@banimode.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
