import React, { createContext, useState } from "react";
import allData from "../Components/assets/allData";

export const HomeContext = createContext(null);

    const getDefaultCart = () =>{
        let cart = {};
        for (let index = 0; index < allData.length+1; index++) {
            cart[index] = 0
        }
        return cart;
    }

const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:(prev[itemId])+1}))
        console.log(cartItems);
    }
    
    const removeFromCart = () =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    
    
    const contextValue = {allData, cartItems, addToCart, removeFromCart};

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider