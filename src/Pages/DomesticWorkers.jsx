import React, { useState } from 'react';
import './Pages.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import D_worker_img from '../Components/Assets/chef.jpg';
import domesticWorkers from '../Components/Data/domestic_workers.json';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const DomesticWorkers = () => {
  const { addToCart } = useCart();
  const [locationFilter, setLocationFilter] = useState('');

  // Get unique locations for the dropdown filter
  const getUniqueLocations = () => {
    const locations = domesticWorkers.domestic_workers.map(worker => worker.address);
    return [...new Set(locations)];
  };

  // Filter domestic workers based on the selected location
  const filteredWorkers = domesticWorkers.domestic_workers.filter(worker =>
    !locationFilter || worker.address.includes(locationFilter)
  );

  return (
    <div>
      <Navbar />
      <div className="subsection">
        <div className="foreman">
          <h3>Hello User!! Find Your Domestic Worker Here</h3>
          <h3>At Your Location in 5 mins!</h3>
          <img src={D_worker_img} alt="domestic-worker-img" />
          <Link to='/usersregistration'><button className='user-btn'>Register Here for Free</button></Link>

          <div className="filters">
            <h4>Filter Domestic Workers</h4>

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
            {filteredWorkers.map((worker) => (
              <div className="user-detailes" key={worker.id}>
                <div className="image-container">
                  <img src={worker.image} alt={worker.name} />
                </div>
                <h3>Name: {worker.name}</h3>
                <h3>Age: {worker.age}</h3>
                <h3>Gender: {worker.gender}</h3>
                <h3>Role: {worker.role}</h3>
                
                <Link to={`/domesticworkers/${worker.name}`}><button>Book Your Slot</button></Link>
                <button 
                  className='user-cart'
                  onClick={() => addToCart(worker)}
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

export default DomesticWorkers;
