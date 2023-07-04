import { createContext, useContext, useState } from "react";

const AppContext = createContext(null)

export const useAppContext = () =>{
    const context = useContext(AppContext)
    if(context === undefined){
        throw new Error("Context is Error!!!")
    }
    
    return context;
}

const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState(()=>{
        const saved = localStorage.getItem("favItem")
        const initialValue = JSON.parse(saved)
        return initialValue || []
    })
    const addToFavorites = (item) =>{
        const oldItem = [...favorites]
        const newItem = oldItem.concat(item)
        setFavorites(newItem)
        localStorage.setItem("favItem",JSON.stringify(newItem))
    }
    const removeToFavorites = (id) =>{
        const oldItem = [...favorites]
        const newItem = oldItem.filter((item) => item.id !== id)
        setFavorites(newItem)
        localStorage.setItem("favItem",JSON.stringify(newItem))
    }

    const favItem = () =>{
        if(favorites.length > 0){
            return favorites.map((item,index)=>{
                return(
                <div className="w-[12rem] h-max overflow-hidden  bg-gray-400 relative drop-shadow-md " key={index}>    
                <img
                  src={item.imgurl}
                  alt="img_Food"
                  className="object-cover object-center w-full h-[10rem]"
                />
                <div className="bg-white h-auto flex justify-center flex-col items-center p-2 gap-1">
                <h2 className=" text-xl text-mocha">{item.name}</h2>
                
                  <h4 className=" text-lg text-green-700">{item.price} ฿</h4>
                  <button className="bg-whip text-mocha hover:bg-cream hover:text-white duration-300 h-10 w-28 top-4 my-2">Add To Cart</button>
                </div>
              </div>)
            })
        }else{
            return <h1 className=" w-full h-full flex items-center  justify-center">คุณไม่มีรายการโปรด</h1>
        }
    }

    return(
        <AppContext.Provider
        value={{favorites,addToFavorites,removeToFavorites,favItem}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
