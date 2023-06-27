import React from "react";
import { BiBasket, BiUser } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import Card from "../Components/Card";

const Navber = () => {
  return (
    <div className="flex flex-col">
    <div className="bg-whip w-full h-16 px-16 flex items-center justify-around drop-shadow-md">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e2/IMG_Academy_Logo.svg"
          alt="logo"
          className="w-16 h-full object-cover"
        ></img>
      </div>
      <div className="h-full">
        <ul className="flex gap-4 h-full">
          <li className="w-24 flex relative justify-center items-center  h-full text-xl cursor-pointer before:content-[''] before:w-0 before:absolute before:bg-cream hover:before:w-full hover:before:h-1  before:bottom-0 before:duration-[500ms]">
            <Link to="/" className=" w-full h-full flex items-center justify-center text-mocha focus:before:conten-[''] focus:before:w-full focus:before:h-1 focus:before:bottom-0 focus:before:bg-cream focus:before:absolute">หน้าเเรก</Link>
          </li>
          <li className="w-24 flex relative justify-center items-center  h-full text-xl cursor-pointer before:content-[''] before:w-0 before:absolute before:bg-cream hover:before:w-full hover:before:h-1  before:bottom-0 before:duration-[500ms]">
            <Link to="/reserve"  className=" w-full h-full flex items-center justify-center text-mocha focus:before:conten-[''] focus:before:w-full focus:before:h-1 focus:before:bottom-0 focus:before:bg-cream focus:before:absolute">จองที่นั่ง</Link>
          </li>
          <li className="w-24 flex relative justify-center items-center  h-full text-xl cursor-pointer before:content-[''] before:w-0 before:absolute before:bg-cream hover:before:w-full hover:before:h-1  before:bottom-0 before:duration-[500ms]">
            <Link to="/queue"  className=" w-full h-full flex items-center justify-center text-mocha focus:before:conten-[''] focus:before:w-full focus:before:h-1 focus:before:bottom-0 focus:before:bg-cream focus:before:absolute">จำนวนคิว</Link>
          </li>
          <li className="w-24 flex relative justify-center items-center  h-full text-xl cursor-pointer before:content-[''] before:w-0 before:absolute before:bg-cream hover:before:w-full hover:before:h-1  before:bottom-0 before:duration-[500ms]">
            <Link to="/contact"  className=" w-full h-full flex items-center justify-center text-mocha focus:before:conten-[''] focus:before:w-full focus:before:h-1 focus:before:bottom-0 focus:before:bg-cream focus:before:absolute ">ติดต่อ</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
       <Link to="/cart"> <BiBasket className="p-1 w-10 h-10 rounded-full duration-[500ms] cursor-pointer hover:bg-cream text-mocha" /></Link>
        <BiUser className="p-1 w-10 h-10 rounded-full duration-[500ms] cursor-pointer hover:bg-cream text-mocha" />
      </div>
    </div>
    <div className="px-[8rem]">
    <Outlet/>
    </div>
    <div className=" relative bottom-0 bg-whip w-full h-[4rem] flex justify-center items-center shadow-md mt-4">
      <h3 className="text-mocha">Copyright © 2023 </h3>
    </div>
    </div>
  );
};

export default Navber;
