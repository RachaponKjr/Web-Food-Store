import React, { useState } from "react";
const Card = () => {

  return (
    <div className="my-6 gap-5 flex flex-col ">
      <h3 className=" text-2xl pl-[7rem]">ตะกร้าสินค้า</h3>
      <div className=" flex gap-4 justify-center ">
        <div className="w-[45rem] h-min border-2 border-cream">
        <div className=" flex justify-between border-b-2 border-whip p-1 text-[16px]">
        <h1 className="text-mocha">รายการสินค้า</h1>
        <h2 className="text-mocha">(<span className=" text-red-400">2</span>) ชิ้น</h2>
        </div>
        {/* ITEM */}
        <div className="flex px-2 py-2 justify-between border-b-2 ">
          <div className="flex">
          <img src="https://medthai.com/wp-content/uploads/2014/08/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7.jpg" alt="ชาเขียว" className="w-[6rem] object-cover h-[6rem] p-1"></img>
          <div>
          <h5 className=" text-mocha">ชาเขียว</h5>
          <h6 className="text-mocha">รายละเอียดต่างๆ</h6>
          </div></div>
          <div className="inline-flex h-min gap-4">
            <h4>15฿</h4>
            <input type="number" defaultValue={1} min="0" max="99" className=" rounded-[5px] flex text-center shadow-md w-8"/>
            <h3>30฿</h3>
          </div>
        </div>
        <div className="flex px-2 py-2 justify-between border-b-2 ">
          <div className="flex">
          <img src="https://medthai.com/wp-content/uploads/2014/08/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7.jpg" alt="ชาเขียว" className="w-[6rem] object-cover h-[6rem] p-1"></img>
          <div>
          <h5 className=" text-mocha">ชาเขียว</h5>
          <h6 className="text-mocha">รายละเอียดต่างๆ</h6>
          </div></div>
          <div className="inline-flex h-min gap-4">
            <h4>15฿</h4>
            <input type="number" defaultValue={1} min="0" max="99" className=" rounded-[5px] flex text-center shadow-md w-8"/>
            <h3>30฿</h3>
          </div>
        </div>
        <div className="flex px-2 py-2 justify-between border-b-2 ">
          <div className="flex">
          <img src="https://medthai.com/wp-content/uploads/2014/08/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7.jpg" alt="ชาเขียว" className="w-[6rem] object-cover h-[6rem] p-1"></img>
          <div>
          <h5 className=" text-mocha">ชาเขียว</h5>
          <h6 className="text-mocha">รายละเอียดต่างๆ</h6>
          </div></div>
          <div className="inline-flex h-min gap-4">
            <h4>15฿</h4>
            <input type="number" defaultValue={1} min="0" max="99" className=" rounded-[5px] flex text-center shadow-md w-8"/>
            <h3>30฿</h3>
          </div>
        </div>
        <div className="flex px-2 py-2 justify-between border-b-2 ">
          <div className="flex">
          <img src="https://medthai.com/wp-content/uploads/2014/08/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7.jpg" alt="ชาเขียว" className="w-[6rem] object-cover h-[6rem] p-1"></img>
          <div>
          <h5 className=" text-mocha">ชาเขียว</h5>
          <h6 className="text-mocha">รายละเอียดต่างๆ</h6>
          </div></div>
          <div className="inline-flex h-min gap-4">
            <h4>15฿</h4>
            <input type="number" defaultValue={1} min="0" max="99" className=" rounded-[5px] flex text-center shadow-md w-8"/>
            <h3>30฿</h3>
          </div>
        </div>
        <div className="flex px-2 py-2 justify-between border-b-2 ">
          <div className="flex">
          <img src="https://medthai.com/wp-content/uploads/2014/08/%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%8A%E0%B8%B2%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7.jpg" alt="ชาเขียว" className="w-[6rem] object-cover h-[6rem] p-1"></img>
          <div>
          <h5 className=" text-mocha">ชาเขียว</h5>
          <h6 className="text-mocha">รายละเอียดต่างๆ</h6>
          </div></div>
          <div className="inline-flex h-min gap-4">
            <h4>15฿</h4>
            <input type="number" defaultValue={1} min="0" max="99" className=" rounded-[5px] flex text-center shadow-md w-8"/>
            <h3>30฿</h3>
          </div>
        </div>
        
        {/* ITEM */}
      </div>
      <div className="h-full w-min gap-4 flex flex-col">
        <div className=" border-2 border-cream w-[20rem] h-min p-1 text-[16px]">
          <h3 className="text-mocha">สรุปยอด</h3>
          <div className=" flex justify-between border-t-2 border-whip py-1">
            <h3 className="text-mocha">รวม</h3>
            <h4 className="text-mocha">1,500฿</h4>
            </div>
            <p className="text-[12px] text-red-700">** ราคานี้ไม่มีค่าVAT 7%</p>
          <button className=" my-2 rounded-[8px] border-2 text-mocha border-green-400 hover:bg-green-400 hover:text-white w-full h-[2.5rem] duration-300">สั่งซื้อ</button>
        </div>
        <div className=" bg-emerald-300">
          <h4>Supply</h4>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
