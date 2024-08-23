import React from 'react';
import './Pages.css';
import Navbar from '../Components/Navbar/Navbar'; 
import driver_img from '../Components/Assets/driver.jpg';
import Footer from '../Components/Footer/Footer'; 
import driverData from '../Components/Data/drivers.json';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; 

const Drivers = () => {

  const { addToCart } = useCart() 

  return (
    <div>
      <Navbar />
      <div className="subsection">
        <div className='foreman'>
          <h3>Hello User!! Find Your Driver Here</h3>
          <h3>At Your Location in 5 mins</h3>
          <img src={driver_img} alt="" />
          <div className="main-detailes">
            {driverData.drivers.map((driver) => {return(
              <div className="user-detailes" key={driver.id}>
                <div className="image-container">
                  <img src={driver.image} alt="" />
                </div>
                {/* <button 
                  className='user-cart'
                  onClick={() => addToCart(driver)}>
                  Add to Cart
                </button> */}
                <h3>Name: {driver.name}</h3>
                <h3>Age: {driver.age}</h3>
                <h3>Gender: {driver.gender}</h3>
                <h3>Role: {driver.role}</h3>
                <Link to={`/drivers/${driver.name}`}>
                  <button>Book Your Slot</button>
                </Link>
                  <button 
                  className='user-cart'
                  onClick={() => addToCart(driver)}>
                  Add to Favorites
                </button>
                
              </div>
            )})}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Drivers;
