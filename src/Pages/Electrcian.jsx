import React, { useState } from 'react';
import './Pages.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import electrican_img from '../Components/Assets/electrcian.jpg';
import electricianData from '../Components/Data/electricians.json';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const Electrician = () => {
  const { addToCart } = useCart(); 
  const [locationFilter, setLocationFilter] = useState('');

  // Get unique locations for the dropdown filter
  const getUniqueLocations = () => {
    const locations = electricianData.electricians.map(electrician => electrician.address);
    return [...new Set(locations)];
  };

  // Filter electricians based on the selected location
  const filteredElectricians = electricianData.electricians.filter(electrician =>
    !locationFilter || electrician.address.includes(locationFilter)
  );

  return (
    <div>
      <Navbar />
      <div className="subsection">
        <div className="foreman">
          <h3>Hello User!! Find Your Electrician Here</h3>
          <h3>At Your Location in 5 mins</h3>
          <img src={electrican_img} alt="Electrician" />
          <Link to='/usersregistration'>
            <button className='user-btn'>Register Here for Free</button>
          </Link>
          <div className="filters">
            <h4>Filter Electricians</h4>

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
            {filteredElectricians.map((electrician) => (
              <div className="user-detailes" key={electrician.id}>
                <div className="image-container">
                  <img src={electrician.image} alt={electrician.name} />
                </div>
                <h3>Name: {electrician.name}</h3>
                <h3>Age: {electrician.age}</h3>
                <h3>Gender: {electrician.gender}</h3>
                <h3>Role: {electrician.role}</h3>
                <Link to={`/electricians/${electrician.name}`}>
                  <button>Book Your Slot</button>
                </Link>
                <button 
                  className='user-cart'
                  onClick={() => addToCart(electrician)}
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

export default Electrician;
