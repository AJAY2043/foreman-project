import React from 'react';
import { useCart } from '../../Context/CartContext'; // Adjust the import path as needed
import './Cart.css'; // Import the CSS file
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import cross_icon from '../Assets/cart_cross_icon.png'; // Adjust the import path as needed


const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Destructure cart and removeFromCart from the Cart context

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1>Favorites</h1>
        {cart.length === 0 ? (
          <p>Your Favorites is empty.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-details">
                  <h3>Title: {item.title}</h3>
                  <h3>Name: {item.name}</h3>
                  <p>Age: {item.age}</p>
                  <p>Role: {item.role}</p>
                  <p>Experience: {item.experience}</p>
                  <p>Availability: {item.availability}</p>
                  <p>Price: {item.price}</p>
                </div>
                
                <button onClick={() => removeFromCart(item)} className="remove-button">
                  <img src={cross_icon} alt="Remove" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
