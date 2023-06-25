import React, { useState,useEffect } from "react";
import { AiFillFire, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import { data } from "../Data/Data";
import { useAppContext } from "../Contexts/appContext";

const Home = () => {
  const [dataFood,setdataFood] = useState([])

  const { favorites ,addToFavorites,removeToFavorites,favItem} = useAppContext()

  const arrFavorites = Object.values(favorites)
  console.log(arrFavorites)
  
  useEffect(()=>{
    setdataFood(data)
  },[])

  const Check = (id) =>{
    const boolen = arrFavorites.some((item)=>item.id === id)
    return boolen
  }

  return (
    <div className="py-5 ">
      <div className="my-5">
        <h1 className="text-xl flex items-center gap-1 text-mocha">
          รายการยอดฮิด
          <AiFillFire className="top-[-0.2rem] relative text-[#ff5a00]" />
        </h1>
        {/* ITEM LIST */}
        <div className=" py-1 flex justify-start gap-5 flex-wrap ">
          {dataFood.map((item,index)=>{
            return(
<div className="w-[12rem] h-max overflow-hidden  bg-gray-400 relative drop-shadow-md " key={index}>
            
            {
              Check(item.id) ? 
              <AiFillHeart
              onClick={()=>removeToFavorites(item.id)}
              className="absolute right-2 top-2 text-2xl cursor-pointer text-red-500 duration-500"
              
            /> 
            :  
            <AiOutlineHeart
              onClick={()=>addToFavorites(item)}
            className="absolute right-2 top-2 text-2xl cursor-pointer text-red-500 duration-500"
            
          />
            }
            
            <img
              src={item.imgurl}
              alt="img_Food"
              className="object-cover object-center w-full h-[8rem]"
            />
            <div className="bg-white h-auto flex justify-center flex-col items-center p-2 gap-1">
            <h2 className=" text-xl text-mocha">{item.name}</h2>
            
              <h4 className=" text-lg text-green-700">{item.price} ฿</h4>
              <button className="bg-whip text-mocha hover:bg-cream hover:text-white duration-300 h-10 w-28 top-4 my-2">Add To Cart</button>
            </div>
          </div>
            )
          })}

        </div>
        </div>
        {/* ITEM LIST */}

          {/* LIKE LIST */}
          <div className=" w-full h-max my-4">
          <h1 className="text-xl flex items-center gap-1 text-mocha">
          รายการที่ชอบ
          <AiFillHeart className="top-[-0.2rem] relative text-[#ff5a00]" />
        </h1>
        <div className=" py-1 flex justify-start gap-5 flex-wrap ">  
          
          {favItem()}
          
        </div>
          </div>
          {/* LIKE LIST */}

          <div>
        <h1 className="text-xl flex items-center gap-1 text-mocha w-full">
          รายการอาหาร
          <BiFoodMenu className="top-[-0.2rem] relative text-gray-700" />
        </h1>
        <div className=" py-1 flex justify-start flex-wrap gap-5 ">
          {/* {datafood.map((item,index)=>{
            return(
<div className="w-[12rem] h-max overflow-hidden  bg-gray-400 relative drop-shadow-md " key={index}>
            {item.favorite === true ? (
              <AiFillHeart
              onClick={() => {handleFavorite(item.id);}}
                className="absolute right-2 top-2 text-2xl cursor-pointer text-red-500 duration-500"
                
              />
            ) : (
              <AiOutlineHeart
              onClick={() => {handleFavorite(item.id);}}
                className="absolute right-2 top-2 text-2xl cursor-pointer text-mocha hover:text-red-600 duration-500"
              />
            )}
            <img
              src={item.imgurl}
              alt="img_Food"
              className="object-cover object-center w-full h-[8rem]"
            />
            <div className="bg-white h-auto flex justify-center flex-col items-center p-2 gap-1">
            <h2 className=" text-xl text-mocha">{item.name}</h2>
            
              <h4 className=" text-lg text-green-700">{item.price} ฿</h4>
              <button className="bg-whip text-mocha hover:bg-cream hover:text-white duration-300 h-10 w-28 top-4 my-2">Add To Cart</button>
            </div>
          </div>
            )
          })} */}

        </div>
        </div>
      <div></div>
    </div>
  );
};

export default Home;
