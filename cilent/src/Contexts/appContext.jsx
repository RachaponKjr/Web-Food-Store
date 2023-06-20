import { createContext, useContext, useState } from "react";

const AppContext = createContext(null)

export const useAppContext = () =>{
    const context = useContext(AppContext)
    if(context === undefined){
        throw new Error("Error")
    }
    
    return context;
}

const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (item) =>{
        const oldItem = [...favorites]
        const newItem = oldItem.concat(item)

        setFavorites(newItem)
    }
    const removeToFavorites = (id) =>{

        const oldItem = [...favorites]
        const newItem = oldItem.filter((item) => item.id !== id)

        setFavorites(newItem)
    }

    return(
        <AppContext.Provider
        value={{favorites,addToFavorites,removeToFavorites}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
