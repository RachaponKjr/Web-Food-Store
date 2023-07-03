import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

const initialState = 
    {
        itemCart: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [] ,
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
    }


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            const actionItemId = action.payload.id
            const findItem = state.itemCart.findIndex(item => item.id === actionItemId )
                if (findItem >=0) {
                    state.itemCart[findItem].caretQuantity += 1
                }else{
                    state.itemCart.push({...action.payload, caretQuantity: 1})
                    toast.success(`เพิ่ม ${action.payload.name} เรียบร้อย`,{position:"bottom-right"})   
                    localStorage.setItem("carts",JSON.stringify(state.itemCart))
                }
        },
        removeItem(state,action){
            state.itemCart = state.itemCart.filter(item => item.id !== action.payload)
        },
        increaseItem(state,action){
            const findItem = state.itemCart.find(item => item.id === action.payload.id)
                findItem.caretQuantity++
                
        },
        decreaseItem(state,action){
            const findItem = state.itemCart.find(item => item.id === action.payload.id)
            if(findItem.caretQuantity === 1){
                findItem.caretQuantity = 1
            }else{
                findItem.caretQuantity--
            }
        },
        getTotals(state,action){
           let { total, quantity} = state.itemCart.reduce((cartTotal,cartItem)=>{
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
        delItem(state, action){
            const delItem = state.itemCart.filter((item)=>item.id !== action.payload.id)
            state.itemCart = delItem
            toast.warning(`ลบ ${action.payload.name} เรียบร้อย`,{position:"bottom-right"}) 
        }
    },
})


export const {add,getTotals,increaseItem,decreaseItem,delItem} = cartSlice.actions

export default cartSlice.reducer