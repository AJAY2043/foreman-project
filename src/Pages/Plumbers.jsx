import React, { useState } from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar'
import plumber_img from '../Components/Assets/plumber.jpg' 
import Footer from '../Components/Footer/Footer'
import plumberData from '../Components/Data/plumbers.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Plumbers = () => {

  const { addToCart } = useCart()
  const [locationFilter, setLocationFilter] = useState('');

  // Get unique locations for the dropdown filter
  const getUniqueLocations = () => {
    const locations = plumberData.plumbers.map(plumber => plumber.address);
    return [...new Set(locations)];
  };

  // Filter plumbers based on the selected location
  const filteredPlumbers = plumberData.plumbers.filter(plumber =>
    !locationFilter || plumber.address.includes(locationFilter)
  );

  return (
    <div>
      <Navbar />
      <div className="subsection">
        <div className="foreman">
          <h3>Hello User!! Find Your Plumber Here</h3>
          <h3>At Your Location in 5 mins</h3>
          <img src={plumber_img} alt="Plumber" />
          <Link to='/usersregistration'>
            <button className='user-btn'>Register Here for Free</button>
          </Link>

          <div className="filters">
            <h4>Filter Plumbers</h4>

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
            {filteredPlumbers.map((plumber) => (
              <div className="user-detailes" key={plumber.id}>
                <div className="image-container">
                  <img src={plumber.image} alt={plumber.name} />
                </div>

                <h3>Name: {plumber.name}</h3>
                <h3>Age: {plumber.age}</h3>
                <h3>Gender: {plumber.gender}</h3>
                <h3>Role: {plumber.role}</h3>
                <Link to={`/plumbers/${plumber.name}`}>
                  <button>Book Your Slot</button>
                </Link>
                <button
                  className='user-cart'
                  onClick={() => addToCart(plumber)}>
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

export default Plumbers
