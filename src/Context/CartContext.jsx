import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const itemExists = cart.some(cartItem => cartItem.name === item.name);

    if (itemExists) {
      // Show an alert if the item is already in the cart
      alert(`${item.name} is already added to the Favorites.`);
    } else {
      // Add the item to the cart if it is not already present
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem !== item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

export default CartContext;
