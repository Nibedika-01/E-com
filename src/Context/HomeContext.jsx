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
    
    const addToCart = (itemId) => {
    setCartItems((prev) => {
        // Get current quantity or default to 0 if it doesn't exist
        const currentQuantity = prev[itemId] || 0;
        // Create new cart with updated quantity
        return {
            ...prev,
            [itemId]: currentQuantity + 1
        };
    });
};
    
    const removeFromCart = (itemId) => {
    setCartItems((prev) => {
        // Get current quantity or default to 0 if it doesn't exist
        const currentQuantity = prev[itemId] || 0;
        
        // Create new cart with updated quantity
        return {
            ...prev,
            [itemId]: currentQuantity - 1
        };
    });
};
    
    
    const contextValue = {allData, cartItems, addToCart, removeFromCart};

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider