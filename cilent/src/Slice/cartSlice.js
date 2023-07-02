import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        cart:[],
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    }


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            const actionItemId = action.payload.id
            const findItem = state.cart.findIndex(item => item.id === actionItemId )
                if (findItem >=0) {
                    state.cart[findItem].caretQuantity += 1
                }else{
                    state.cart.push({...action.payload, caretQuantity: 1})   
                }
        },
        removeItem(state,action){
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        getTotals(state,action){
           let { total, quantity} = state.cart.reduce((cartTotal,cartItem)=>{
                const { price, caretQuantity} = cartItem;
                const itemTotal = price * caretQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += caretQuantity
                
                return cartTotal
            },{
                total: 0,
                quantity: 0,
            }
            )

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        },
    },
})


export const {add,getTotals} = cartSlice.actions

export default cartSlice.reducer