import React from 'react';
import { useCart } from '../CartContext'; // Adjust the import path as needed

const CartPage = () => {
  const { cart } = useCart(); // Destructure cart from the Cart context

  return (
    <div>
      <h1>Cart Page</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li> // Display the item name or other details
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
