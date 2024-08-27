import React, { useState } from 'react';
import './Pages.css';
import Navbar from '../Components/Navbar/Navbar'; 
import driver_img from '../Components/Assets/driver.jpg';
import Footer from '../Components/Footer/Footer'; 
import driverData from '../Components/Data/drivers.json';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; 

const Drivers = () => {
  const { addToCart } = useCart();
  const [locationFilter, setLocationFilter] = useState('');

  // Get unique locations for the dropdown filter
  const getUniqueLocations = () => {
    const locations = driverData.drivers.map(driver => driver.address);
    return [...new Set(locations)];
  };

  // Filter drivers based on the selected location
  const filteredDrivers = driverData.drivers.filter(driver =>
    !locationFilter || driver.address.includes(locationFilter)
  );

  return (
    <div>
      <Navbar />
      <div className="subsection">
        <div className='foreman'>
          <h3>Hello User!! Find Your Driver Here</h3>
          <h3>At Your Location in 5 mins</h3>
          <img src={driver_img} alt="Driver" />
          <Link to='/usersregistration'><button className='user-btn'>Register Here for Free</button></Link>

          <div className="filters">
            <h4>Filter Drivers</h4>

            {/* Location Dropdown */}
            <div>
              <label>Location:</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">Select Location</option>
                {getUniqueLocations().map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="main-detailes">
            {filteredDrivers.map((driver) => (
              <div className="user-detailes" key={driver.id}>
                <div className="image-container">
                  <img src={driver.image} alt={driver.name} />
                </div>
                <h3>Name: {driver.name}</h3>
                <h3>Age: {driver.age}</h3>
                <h3>Gender: {driver.gender}</h3>
                <h3>Role: {driver.role}</h3>
                <Link to={`/drivers/${driver.name}`}>
                  <button>Book Your Slot</button>
                </Link>
                <button 
                  className='user-cart'
                  onClick={() => addToCart(driver)}
                >
                  Add to Favorites
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Drivers;
