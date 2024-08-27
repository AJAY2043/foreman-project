import React, { useState } from 'react';
import './Pages.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import mechanic_img from '../Components/Assets/mechanic.jpg';
import mechanicData from '../Components/Data/mechanics.json';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Mechanics = () => {
  const { addToCart } = useCart();
  const [locationFilter, setLocationFilter] = useState('');

  // Get unique locations for the dropdown filter
  const getUniqueLocations = () => {
    const locations = mechanicData.mechanics.map(mechanic => mechanic.address);
    return [...new Set(locations)];
  };

  // Filter mechanics based on the selected location
  const filteredMechanics = mechanicData.mechanics.filter(mechanic =>
    !locationFilter || mechanic.address.includes(locationFilter)
  );

  return (
    <div>
      <Navbar />
      <div className="subsection">
        <div className="foreman">
          <h3>Hello User!! Find Your Mechanic Here</h3>
          <h3>At Your Location in 5 mins</h3>
          <img src={mechanic_img} alt="Mechanic" />
          <Link to='/usersregistration'><button className='user-btn'>Register Here for Free</button></Link>

          <div className="filters">
            <h4>Filter Mechanics</h4>

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
            {filteredMechanics.map((mechanic) => (
              <div className="user-detailes" key={mechanic.id}>
                <div className="image-container">
                  <img src={mechanic.image} alt={mechanic.name} />
                </div>
                <h3>Name: {mechanic.name}</h3>
                <h3>Age: {mechanic.age}</h3>
                <h3>Gender: {mechanic.gender}</h3>
                <h3>Role: {mechanic.role}</h3>
                
                <Link to={`/mechanics/${mechanic.name}`}><button>Book Your Slot</button></Link>
                <button 
                  className='user-cart'
                  onClick={() => addToCart(mechanic)}
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
  );
};

export default Mechanics;
