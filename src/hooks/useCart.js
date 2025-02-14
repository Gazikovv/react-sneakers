import React from "react";
import AppContext from "../context";

export const useCart = () =>{
    const {cartItems, setCartItems} = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    const totalNalog = Math.round(totalPrice / 100 * 5); 

    return{ cartItems, setCartItems, totalPrice, totalNalog}
}