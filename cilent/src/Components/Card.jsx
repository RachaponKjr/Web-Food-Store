import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import { increaseItem,getTotals,decreaseItem } from "../Slice/cartSlice";
const Card = () => {
  const {itemCart,cartTotalQuantity,cartTotalAmount} = useSelector((start)=> start.cart)
  const itemInCart = Object.values(itemCart)
  const dispatch = useDispatch()
  const increase = (item)=>{
    dispatch(increaseItem(item))
  }
  const decrease = (item)=>{
    dispatch(decreaseItem(item))
  }
  useEffect(()=>{
   dispatch(getTotals())  
  },[increase])
  return (
    <div className="my-6 gap-5 flex flex-col">
      <h3 className=" text-2xl pl-[7rem]">ตะกร้าสินค้า</h3>
      <div className=" flex gap-4 justify-center ">
        <div className="w-[45rem] h-min border-2 border-cream">
        <div className=" flex justify-between border-b-2 border-whip p-1 text-[16px]">
        <h1 className="text-mocha">รายการสินค้า</h1>
        <h2 className="text-mocha">(<span className=" text-red-400">{cartTotalQuantity}</span>) ชิ้น</h2>
        </div>
        {/* ITEM */}
        {cartTotalQuantity === 0 ? <div className=" flex justify-center items-center text-red-500 text-[18px] h-[10rem]">
          <h3>ไม่มีสินค้าในตระกร้า</h3>
        </div> : <> {itemInCart.map((item,index)=>{
          return(
            <div className="flex px-2 py-2 justify-between border-b-2" key={index}>
          <div className="flex">
          <img src={item.imgurl} alt="ชาเขียว" className="w-[6rem] object-cover h-[6rem] p-1"></img>
          <div>
          <h5 className=" text-mocha">{item.name}</h5>
          <h6 className="text-mocha">รายละเอียดต่างๆ</h6>
          </div></div>
          <div className="inline-flex h-min gap-4">
            <h4>{item.price}</h4>
            <div className=" flex justify-between items-center w-16 ">
            <AiOutlineMinus onClick={()=> decrease(item)} className=" cursor-pointer hover:fill-red-500 duration-300 "/>
            <h2>{item.caretQuantity}</h2>
            <AiOutlinePlus onClick={()=> increase(item) } className=" cursor-pointer hover:fill-green-500 duration-300"/>
            </div>
            <h3>{item.price * item.caretQuantity}</h3>
          </div>
        </div>
          )
        })}</>}        
        {/* ITEM */}
      </div>
      <div className="h-full w-min gap-4 flex flex-col">
        <div className=" border-2 border-cream w-[20rem] h-min p-1 text-[16px]">
          <h3 className="text-mocha">สรุปยอด</h3>
          <div className=" flex justify-between border-t-2 border-whip py-1">
            <h3 className="text-mocha">รวม</h3>
            <h4 className="text-mocha">{cartTotalAmount}</h4>
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
