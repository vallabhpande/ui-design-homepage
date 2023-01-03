import React from "react";
import { DiCodeBadge } from "react-icons/di";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RxMobile } from "react-icons/rx";
import Vector from "./imgfiles/Vector.png";
import Card1 from "./imgfiles/./pexels.jpg";
import { FiVideo } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { WiTime4 } from "react-icons/wi";
import Rectangl from "./imgfiles/Rectangle 98 (2).png";
import Rectang from "./imgfiles/Rectangle 98 (1).png";
import Downcard from "./imgfiles/Rectangle 98.png";
import Facebook from "./imgfiles/Facebook Circled.png";
import WhatsApp from "./imgfiles/WhatsApp.png";
import LinkedIn from "./imgfiles/LinkedIn Circled.png";
import Twitter from "./imgfiles/Twitter Circled.png";
import Call from "./imgfiles/Call.png";
import Mail from "./imgfiles/Mail.png";
import LaptopImage from "./imgfiles/Laptop Image .png";
import "./Icon.css";

const Homepages = () => {
  return (
    <div>
      <div className=" grid lg:grid-cols-2 md:mx-20 mx-5 ">
        <div className=" my-20">
          <div className=" font text-[#180D65] font-bold text-5xl">
            Get Access to Unlimited <br /> Resourses
          </div>
          <h1 className="  font-semibold mt-5 text-base text-gray-500">
            It was popularised in the 1960s with the release of Letraset sheets
            <br />
            containing Lorem Ipsum passages, and more recently with desktop
            <br />
            publishing software like Aldus PageMaker including versions of Lorem
            <br />
            Ipsum.
          </h1>
          <input className="  border-[2px] my-10 w-72 h-10 rounded-l-xl" />
          <button className=" text-white font-semibold border-r-[2px] w-32 h-10 rounded-r-xl bg-orange-400">
            Search
          </button>
        </div>
        <div>
          <div className=" flex">
            <img src={LaptopImage} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className=" text-[#180D65] text-3xl font-bold text-center">
          Popular Category
        </h1>
        <div className=" mx-16 pb-14 pt-20 grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 gap-y-10 text-center">
          <div className="">
            <div className=" flex justify-center pb-5  ">
              <DiCodeBadge className=" text-[#F5801C] w-28 h-28 p-5 pb-5 rounded-full bg-orange-50 " />
            </div>
            <h1 className=" text-[#180D65]  text-xl font-bold">
              Web Development
            </h1>
            <h2>Eleifend odio elit etiam praesrnt pharetre,vel</h2>
          </div>
          <div>
            <div className=" flex justify-center pb-5  ">
              <img
                src={Vector}
                alt=""
                className=" bg-orange-50 rounded-full w-28 h-28 p-5 "
              />
            </div>
            <h1 className=" text-[#180D65]  text-xl font-bold">
              Digital Marketing
            </h1>
            <h2>Eleifend odio elit etiam praesrnt pharetre,vel</h2>
          </div>
          <div>
            <div className=" flex justify-center pb-5  ">
              <IoColorPaletteOutline className=" text-[#F5801C] w-28 h-28 p-5 pb-5 rounded-full bg-orange-50 " />
            </div>
            <h1 className=" text-[#180D65]  text-xl font-bold">
              Graphics Designing
            </h1>
            <h2>Eleifend odio elit etiam praesrnt pharetre,vel</h2>
          </div>
          <div>
            <div className=" flex justify-center pb-5   ">
              <RxMobile className=" text-[#F5801C] w-28 h-28 p-5 pb-5 rounded-full bg-orange-50 " />
            </div>
            <h1 className=" text-[#180D65]  text-xl font-bold">
              App Development
            </h1>
            <h2>Eleifend odio elit etiam praesrnt pharetre,vel</h2>
          </div>
        </div>
      </div>
      <hr className=" mx-96 my-5" />
      <div>
        <h1 className=" text-[#180D65] text-center mb-5 text-3xl font-bold">
          Most Popular Courses
        </h1>
        <div className=" grid md:grid-cols-5 md:gap-5 gap-5 lg:mx-20">
          <button className=" hover:border-b-2 hover:border-[#180D65] text-base font-bold hover:text-[#180D65] ">
            All category
          </button>
          <button className=" hover:border-b-2 hover:border-[#180D65] text-base font-bold hover:text-[#180D65] ">
            UI/UX Design
          </button>
          <button className=" hover:border-b-2 hover:border-[#180D65] text-base font-bold hover:text-[#180D65] ">
            Web Development
          </button>
          <button className=" hover:border-b-2 hover:border-[#180D65] text-base font-bold hover:text-[#180D65] ">
            Digital Marketing
          </button>
          <button className=" hover:border-b-2 hover:border-[#180D65] text-base font-bold hover:text-[#180D65] ">
            App Development
          </button>
        </div>
      </div>
      <div className=" grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:gap-x-20 lg:gap-10 lg:mx-5 mx-5">
        <div className=" border-[1px] lg:w-[430px] md:w-96 w-[340px] rounded-xl lg:mx-5 my-20 ">
          <div className="">
            <img src={Card1} alt="" className="w-[430px] h-60 rounded-t-xl " />
          </div>
          <div className=" flex ">
            <div className=" mx-5">
              <h1 className=" mt-4 text-sm">Graphic Design</h1>
              <h1 className=" pb-5 pt-2 text-lg font-bold ">
                Fundamentals Of Design & Drawing
              </h1>
            </div>
            <div className=" text-[#168444] border-2 rounded-full w-20 h-9 my-3 -ml-2 text-lg flex">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mt-1 h-5 mx-2  w-5"
              >
                <path
                  d="M10.9995 5.00917C11.3544 4.72269 11.1719 4.14961 10.7167 4.1211L7.95239 3.94798C7.76245 3.93609 7.59573 3.81739 7.52233 3.6418L6.46132 1.10359C6.29012 0.694043 5.70988 0.694044 5.53868 1.10359L4.47767 3.64182C4.40427 3.81741 4.23755 3.93611 4.04761 3.948L1.2834 4.12112C0.828219 4.14962 0.645714 4.72273 1.00059 5.0092L3.09056 6.69628C3.24439 6.82046 3.31061 7.02361 3.25951 7.21458L2.56668 9.80385C2.45043 10.2383 2.92217 10.5934 3.30752 10.3615L5.74217 8.89618C5.9008 8.80071 6.0992 8.80071 6.25783 8.89618L8.69248 10.3615C9.07783 10.5934 9.54957 10.2383 9.43332 9.80385L8.74054 7.21475C8.68944 7.02378 8.75565 6.82064 8.90947 6.69646L10.9995 5.00917Z"
                  fill="#168444"
                />
              </svg>
              4.4
            </div>
          </div>
          <h1 className=" text-lg font-bold mx-4 -my-2 text-[#168444]">
            ₹ 2542.00
          </h1>
          <div className=" my-5 mx-4 grid grid-cols-3">
            <h1 className=" mt-1 flex gap-2 text-gray-800">
              <WiTime4 className=" mt-1 w-5 h-5 text-[#756D6D]" />
              54hr
            </h1>
            <h1 className=" mt-1 -mx-4 flex gap-2  text-gray-800">
              <FiVideo className=" mt-1 w-5 h-5 text-[#756D6D]" />
              37 Sessions
            </h1>
            <h1 className=" mt-1 flex gap-2  text-gray-800">
              <AiOutlineUser className=" w-5 h-5 text-[#756D6D] mt-1" />
              28k+users
            </h1>
          </div>
          <button className=" bg-[#F5801C] w-full h-10 rounded-b-xl">
            Join course
          </button>
        </div>
        <div className=" border-[1px] lg:w-[430px] md:w-96 w-[340px] rounded-xl lg:mx-5 my-20  ">
          <div className="">
            <img src={Card1} alt="" className="w-[430px] h-60 rounded-t-xl " />
          </div>
          <div className=" flex ">
            <div className=" mx-5">
              <h1 className=" mt-4 text-sm">Graphic Design</h1>
              <h1 className=" pb-5 pt-2 text-lg font-bold ">
                Fundamentals Of Design & Drawing
              </h1>
            </div>
            <div className=" text-[#168444] border-2 rounded-full w-20 h-9 my-3 -ml-2 text-lg flex">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mt-1 h-5 mx-2  w-5"
              >
                <path
                  d="M10.9995 5.00917C11.3544 4.72269 11.1719 4.14961 10.7167 4.1211L7.95239 3.94798C7.76245 3.93609 7.59573 3.81739 7.52233 3.6418L6.46132 1.10359C6.29012 0.694043 5.70988 0.694044 5.53868 1.10359L4.47767 3.64182C4.40427 3.81741 4.23755 3.93611 4.04761 3.948L1.2834 4.12112C0.828219 4.14962 0.645714 4.72273 1.00059 5.0092L3.09056 6.69628C3.24439 6.82046 3.31061 7.02361 3.25951 7.21458L2.56668 9.80385C2.45043 10.2383 2.92217 10.5934 3.30752 10.3615L5.74217 8.89618C5.9008 8.80071 6.0992 8.80071 6.25783 8.89618L8.69248 10.3615C9.07783 10.5934 9.54957 10.2383 9.43332 9.80385L8.74054 7.21475C8.68944 7.02378 8.75565 6.82064 8.90947 6.69646L10.9995 5.00917Z"
                  fill="#168444"
                />
              </svg>
              4.4
            </div>
          </div>
          <h1 className=" text-lg font-bold mx-4 -my-2 text-[#168444]">
            ₹ 2542.00
          </h1>
          <div className=" my-5 mx-4 grid grid-cols-3">
            <h1 className=" mt-1 flex gap-2 text-gray-800">
              <WiTime4 className=" mt-1 w-5 h-5 text-[#756D6D]" />
              54hr
            </h1>
            <h1 className=" mt-1 -mx-4 flex gap-2  text-gray-800">
              <FiVideo className=" mt-1 w-5 h-5 text-[#756D6D]" />
              37 Sessions
            </h1>
            <h1 className=" mt-1 flex gap-2  text-gray-800">
              <AiOutlineUser className=" w-5 h-5 text-[#756D6D] mt-1" />
              28k+users
            </h1>
          </div>
          <button className=" bg-[#F5801C] w-full h-10 rounded-b-xl">
            Join course
          </button>
        </div>
        <div className=" border-[1px] lg:w-[430px] md:w-96 w-[340px] rounded-xl lg:mx-5 my-20  ">
          <div className="">
            <img src={Card1} alt="" className="w-[430px] h-60 rounded-t-xl " />
          </div>
          <div className=" flex ">
            <div className=" mx-5">
              <h1 className=" mt-4 text-sm">Graphic Design</h1>
              <h1 className=" pb-5 pt-2 text-lg font-bold ">
                Fundamentals Of Design & Drawing
              </h1>
            </div>
            <div className=" text-[#168444] border-2 rounded-full w-20 h-9 my-3 -ml-2 text-lg flex">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mt-1 h-5 mx-2  w-5"
              >
                <path
                  d="M10.9995 5.00917C11.3544 4.72269 11.1719 4.14961 10.7167 4.1211L7.95239 3.94798C7.76245 3.93609 7.59573 3.81739 7.52233 3.6418L6.46132 1.10359C6.29012 0.694043 5.70988 0.694044 5.53868 1.10359L4.47767 3.64182C4.40427 3.81741 4.23755 3.93611 4.04761 3.948L1.2834 4.12112C0.828219 4.14962 0.645714 4.72273 1.00059 5.0092L3.09056 6.69628C3.24439 6.82046 3.31061 7.02361 3.25951 7.21458L2.56668 9.80385C2.45043 10.2383 2.92217 10.5934 3.30752 10.3615L5.74217 8.89618C5.9008 8.80071 6.0992 8.80071 6.25783 8.89618L8.69248 10.3615C9.07783 10.5934 9.54957 10.2383 9.43332 9.80385L8.74054 7.21475C8.68944 7.02378 8.75565 6.82064 8.90947 6.69646L10.9995 5.00917Z"
                  fill="#168444"
                />
              </svg>
              4.4
            </div>
          </div>
          <h1 className=" text-lg font-bold mx-4 -my-2 text-[#168444]">
            ₹ 2542.00
          </h1>
          <div className=" my-5 mx-4 grid grid-cols-3">
            <h1 className=" mt-1 flex gap-2 text-gray-800">
              <WiTime4 className=" mt-1 w-5 h-5 text-[#756D6D]" />
              54hr
            </h1>
            <h1 className=" mt-1 -mx-4 flex gap-2  text-gray-800">
              <FiVideo className=" mt-1 w-5 h-5 text-[#756D6D]" />
              37 Sessions
            </h1>
            <h1 className=" mt-1 flex gap-2  text-gray-800">
              <AiOutlineUser className=" w-5 h-5 text-[#756D6D] mt-1" />
              28k+users
            </h1>
          </div>
          <button className=" bg-[#F5801C] w-full h-10 rounded-b-xl">
            Join course
          </button>
        </div>
        <div className=" border-[1px] lg:w-[430px] md:w-96 w-[340px] rounded-xl lg:mx-5 my-20  ">
          <div className="">
            <img src={Card1} alt="" className="w-[430px] h-60 rounded-t-xl " />
          </div>
          <div className=" flex ">
            <div className=" mx-5">
              <h1 className=" mt-4 text-sm">Graphic Design</h1>
              <h1 className=" pb-5 pt-2 text-lg font-bold ">
                Fundamentals Of Design & Drawing
              </h1>
            </div>
            <div className=" text-[#168444] border-2 rounded-full w-20 h-9 my-3 -ml-2 text-lg flex">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mt-1 h-5 mx-2  w-5"
              >
                <path
                  d="M10.9995 5.00917C11.3544 4.72269 11.1719 4.14961 10.7167 4.1211L7.95239 3.94798C7.76245 3.93609 7.59573 3.81739 7.52233 3.6418L6.46132 1.10359C6.29012 0.694043 5.70988 0.694044 5.53868 1.10359L4.47767 3.64182C4.40427 3.81741 4.23755 3.93611 4.04761 3.948L1.2834 4.12112C0.828219 4.14962 0.645714 4.72273 1.00059 5.0092L3.09056 6.69628C3.24439 6.82046 3.31061 7.02361 3.25951 7.21458L2.56668 9.80385C2.45043 10.2383 2.92217 10.5934 3.30752 10.3615L5.74217 8.89618C5.9008 8.80071 6.0992 8.80071 6.25783 8.89618L8.69248 10.3615C9.07783 10.5934 9.54957 10.2383 9.43332 9.80385L8.74054 7.21475C8.68944 7.02378 8.75565 6.82064 8.90947 6.69646L10.9995 5.00917Z"
                  fill="#168444"
                />
              </svg>
              4.4
            </div>
          </div>
          <h1 className=" text-lg font-bold mx-4 -my-2 text-[#168444]">
            ₹ 2542.00
          </h1>
          <div className=" my-5 mx-4 grid grid-cols-3">
            <h1 className=" mt-1 flex gap-2 text-gray-800">
              <WiTime4 className=" mt-1 w-5 h-5 text-[#756D6D]" />
              54hr
            </h1>
            <h1 className=" mt-1 -mx-4 flex gap-2  text-gray-800">
              <FiVideo className=" mt-1 w-5 h-5 text-[#756D6D]" />
              37 Sessions
            </h1>
            <h1 className=" mt-1 flex gap-2  text-gray-800">
              <AiOutlineUser className=" w-5 h-5 text-[#756D6D] mt-1" />
              28k+users
            </h1>
          </div>
          <button className=" bg-[#F5801C] w-full h-10 rounded-b-xl">
            Join course
          </button>
        </div>
      </div>
      <h1 className="text-xl font-bold text-center lg:mt-0 md:mt-0 mt-10 text-[#0C2C6B]">
        View More Courses
      </h1>
      <hr className=" border-b-[#0C2C6B] border-b-2 mx-[862px] -mt-1" />
      <hr className=" mx-96 my-16" />
      <h1 className=" text-4xl font-bold text-center text-[#0C2C68] ">
        People Says About Courses
      </h1>
      <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1   xl:mx-20 ml-5 lg:gap-0 md:gap-x-20 gap-10 my-10 ">
        <div className=" lg:w-[500px] md:w-[400px] bg-[#FAFAFA] rounded-xl lg:h-[126px] md:h-[100px] flex gap-5">
          <div>
            <img src={Rectangl} alt="" className="w-[200px] h-[120px]" />
          </div>
          <div>
            <h2 className=" text-lg font-bold">Ravi Krishna</h2>
            <h6 className=" text-xs text-gray-500">UX Designer</h6>
            <h1 className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.consectetur
            </h1>
          </div>
        </div>
        <div className=" lg:w-[500px] md:w-[400px] bg-[#FAFAFA] rounded-xl lg:h-[126px] md:h-[100px] flex gap-5">
          <div>
            <img src={Rectang} alt="" className="w-[200px] h-[120px]" />
          </div>
          <div>
            <h2 className=" text-lg font-bold">Ravi Krishna</h2>
            <h6 className=" text-xs text-gray-500">UX Designer</h6>
            <h1 className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.consectetur
            </h1>
          </div>
        </div>
        <div className=" lg:w-[500px] md:w-[400px] bg-[#FAFAFA] rounded-xl lg:h-[126px] md:h-[100px] flex gap-5">
          <div>
            <img src={Downcard} alt="" className="w-[200px] h-[120px]" />
          </div>
          <div>
            <h2 className=" text-lg font-bold">Ravi Krishna</h2>
            <h6 className=" text-xs text-gray-500">UX Designer</h6>
            <h1 className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.consectetur
            </h1>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className=" grid lg:grid-cols-4 md:grid-cols-2 bg-[#0C2C6B]">
        <div className=" md:mx-10  my-10 w-full">
          <h1 className=" font-bold text-3xl text-orange-500 ">
            M O N G R A M
          </h1>
          <h1 className=" mt-5 font-semibold text-xl text-white">
            Steet no 340, New York, United <br /> States
          </h1>
          <div className=" grid grid-cols-4 mt-5 ">
            <img src={Facebook} alt="" className=" w-[44px] h-[44px] my-5 " />
            <img src={WhatsApp} alt="" className="w-[44px] h-[90px] " />
            <img src={LinkedIn} alt="" className="w-[44px] h-[90px] " />
            <img src={Twitter} alt="" className="w-[44px] h-[90px] " />
          </div>
        </div>
        <div className=" md:mx-20">
          <h1 className=" font-semibold text-2xl text-white my-10">
            Categories
          </h1>
          <div>
            <h1 className=" text-lg text-white">Web Development</h1>
            <h1 className=" text-lg text-white my-4">Mobile App </h1>
            <h1 className=" text-lg text-white my-4">Graphics Design</h1>
            <h1 className=" text-lg text-white my-4">Digital Marketing</h1>
          </div>
        </div>
        <div className=" md:mx-20">
          <h1 className="font-semibold text-2xl text-white my-10">
            Useful Links
          </h1>
          <div>
            <h1 className=" text-lg text-white">Home</h1>
            <h1 className=" text-lg text-white my-4">Gallery</h1>
            <h1 className=" text-lg text-white my-4">About Us</h1>
            <h1 className=" text-lg text-white my-4">Contact Us</h1>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-2xl text-white my-10">
            Stay Connected!
          </h1>
          <button className=" bg-[#FFFFFF] text-[#FD1A1A] w-[251px] h-[63px] rounded-full">
            Subscribe
          </button>
          <div className=" text-white text-lg flex my-7  gap-2">
            <img src={Call} alt="" />
            +111 438 4312
          </div>
          <div className=" text-white text-lg flex  gap-2">
            <img src={Mail} alt="" />
            contact@example.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepages;
