import React, { createContext, useState } from "react";
import allData from "../Components/assets/allData";

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < allData.length + 1; index++) {
        cart[index] = 0
    }
    return cart;
}

const HomeContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const currentQuantity = prev[itemId] || 0;
            return {
                ...prev,
                [itemId]: currentQuantity + 1
            };
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const currentQuantity = prev[itemId];
            return {
                ...prev,
                [itemId]: currentQuantity - 1
            };
        });
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allData.find(product => {
                    return product.id === Number(item);
                });
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };
    console.log(getTotalCartItems());



    const contextValue = { getTotalCartAmount, getTotalCartItems, allData, cartItems, addToCart, removeFromCart };

    return (
        <HomeContext.Provider value={contextValue}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeContextProvider