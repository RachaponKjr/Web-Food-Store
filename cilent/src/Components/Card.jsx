import React, { useEffect, useState } from "react";
import { BiBasket } from "react-icons/bi";
import { BsChevronDoubleRight } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";

const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const [step,setStep] = useState(1)

  const handleToggle = () => {
    setCardOpen((current) => !current);
  };
  return (
    <>
      {cardOpen ? (
        <div className=" flex flex-col z-10 w-[20rem] h-[30rem] bg-whip/[0.8] opacity-[0.6] hover:opacity-[1] fixed bottom-4 right-4 shadow-md rounded-md p-[0.5rem] duration-75 " >
          <div className=" relative flex flex-row w-full h-min  items-center gap-2">
            <BiBasket className=" text-mocha text-3xl" />
            <h3>รายการอาหาร <span className=" text-red-500">2</span> รายการ</h3>
            <AiOutlineDown
              onClick={handleToggle}
              className=" text-2xl absolute cursor-pointer text-mocha/[0.7] hover:text-mocha right-0 duration-300"
            />
          </div>
          {/* MANU LIST */}
          {step === 1 && (
          <div className="overflow-y-auto w-full h-full py-2 px-4">
            <div className="flex justify-between border-b-2 py-1 border-mocha">
            <h5>ชื่ออาหาร <span>90฿</span></h5>
            <h5> 1 </h5>
            <div className="flex items-center gap-[10px]">
              <button className=" text-2xl text-green-600 h-4 w-4 flex items-center justify-center">+</button>
              <button className=" text-2xl text-red-600 h-4 w-4 flex items-center justify-center">-</button>
            </div>
          </div>
            
          </div>)
      }
         {step === 2 && (
         <div className=" w-full h-full py-2 px-2 flex flex-col justify-between">
              <div>
                <h3>รายการอาหาร</h3>
                <div className=" px-4 flex justify-between mb-1">
                    <h5>ชานม<span className="ml-1">(2)</span></h5>
                    <h5>100 ฿ </h5>
                </div>
                <div className=" px-4 flex justify-between mb-1">
                    <h5>ชานม<span className="ml-1">(2)</span></h5>
                    <h5>100 ฿ </h5>
                </div>
                <div className=" px-4 flex justify-between mb-1">
                    <h5>ชานม<span className="ml-1">(2)</span></h5>
                    <h5>100 ฿ </h5>
                </div>
                <div className="flex justify-between px-4">
                <h2>VAC <span>7%</span></h2>
                <h5 className="">0 ฿</h5>
                </div></div>
                <div className="flex justify-between px-4">
                  <h3>รวม</h3>
                  <h4>300 ฿</h4>
                </div>
          </div>) }
          {/* MANU LIST */}
          <div onClick={()=>setStep(step + 1) } className=" flex items-center justify-center w-full h-[3.5rem]  cursor-pointer bg-green-500 opacity-70 hover:opacity-[1] rounded-[4px]">
            <h3 className=" text-xl">ถัดไป</h3>
          <BsChevronDoubleRight className="text-xl text-white"/>
        </div></div>
      ) : (
        <div onClick={handleToggle} className=" z-10  group w-[4rem] h-[4rem] flex justify-center items-center rounded-full bg-cream fixed bottom-4 right-4 cursor-pointer shadow-md hover:bg-whip duration-100  ">
          <BiBasket className=" group-hover:text-mocha text-zinc-50 text-4xl" />
        </div>
      )}
    </>
  );
};

export default Card;
