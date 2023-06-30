import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem: [],
    cartTotalQuntity: 1,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            state.cartItem.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer