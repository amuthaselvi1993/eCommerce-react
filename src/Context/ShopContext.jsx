import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for(let index =0; index <all_product.length+1;index++){
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const plusToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount +=itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItem = () => {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    const getBillAmount = () => {
        let billAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo  = all_product.find((product)=>product.id===Number(item))
                billAmount +=itemInfo.old_price *cartItems[item];
            }
        }
        return billAmount
    }
    const getDiscount = () => {
        let discount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo  = all_product.find((product)=>product.id===Number(item))
                discount +=(itemInfo.old_price - itemInfo.new_price) *cartItems[item];
            }
        }
        return discount
    }
    const contextValue = {all_product,cartItems, addToCart, removeFromCart, plusToCart, getTotalCartAmount,getTotalCartItem, getBillAmount, getDiscount};


    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
    }

    export default ShopContextProvider;