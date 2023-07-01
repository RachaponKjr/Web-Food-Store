import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        cart:[],
        totalPrice:0,
        totalQuantity:0
    }


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            const actionItemId = action.payload.id
            const findItem = state.cart.find(item => item.id === actionItemId )
                if (findItem) {
                    findItem.quantity++
                }else{
                    state.cart.push(action.payload)
                }
            
        },
        removeItem(state,action){
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    }
})


export const {add} = cartSlice.actions

export default cartSlice.reducer