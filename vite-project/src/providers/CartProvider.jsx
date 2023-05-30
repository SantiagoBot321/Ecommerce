import CartContext from "../context/CartContext";
import { useState,useEffect } from "react";


const CartProvider = ({ children }) => {
        const [cartItems, setCartItems] = useState(null);
      
        const addToCart = (products) => {
          setCartItems([...cartItems, products]);
        };
      
        const removeFromCart = (productId) => {
          const updatedCartItems = cartItems.filter((item) => item.id !== productId);
          setCartItems(updatedCartItems);
        };
      
        const clearCart = () => {
          setCartItems([]);
        };
      
      
    return (
        <CartContext.Provider
          value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
          }}
        >
          {children}
        </CartContext.Provider>
      );
        }
export default CartProvider;