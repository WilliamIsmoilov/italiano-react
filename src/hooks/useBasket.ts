/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import type { CartItem } from "../libs/types/search";


const useBasket = () => {
     const cartJson: string | null = localStorage.getItem('cartData');
      const currentCart = cartJson ? JSON.parse(cartJson): [];
      const [cartItems, setCartItems] = useState<CartItem[]>(currentCart)


       const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find((item: CartItem) => item._id === input._id)
    if(exist){
      const cartUpdate = cartItems.map((item: CartItem) => {
        return item._id === input._id 
        ? {...exist, quantity: exist.quantity + 1} : 
        item
      });
      setCartItems(cartUpdate)
      localStorage.setItem('cartData', JSON.stringify(cartUpdate))
    }else{
      const cartUpdate = [...cartItems, {...input}];
      setCartItems(cartUpdate)
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
  };

  return {
    cartItems, onAdd
  }
}

export default useBasket;