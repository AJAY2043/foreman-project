import React, { useState } from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar'
import welders_img from '../Components/Assets/welder.jpg'
import Footer from '../Components/Footer/Footer'
import welderData from '../Components/Data/welders.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Welders = () => {

  const { addToCart } = useCart()
  const [locationFilter, setLocationFilter] = useState('');

  // Get unique locations for the dropdown filter
  const getUniqueLocations = () => {
    const locations = welderData.welders.map(welder => welder.address);
    return [...new Set(locations)];
  };

  // Filter welders based on the selected location
  const filteredWelders = welderData.welders.filter(welder =>
    !locationFilter || welder.address.includes(locationFilter)
  );

  return (
    <div>
      <Navbar />
      <div className="subsection">
        <div className="foreman">
          <h3>Hello User!! Find Your Welder Here</h3>
          <h3>At Your Location in 5 mins</h3>
          <img src={welders_img} alt="Welder" />
          <Link to='/usersregistration'><button className='user-btn'>Register Here for Free</button></Link>

          <div className="filters">
            <h4>Filter Welders</h4>

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
            {filteredWelders.map((welder) => (
              <div className="user-detailes" key={welder.id}>
                <div className="image-container">
                  <img src={welder.image} alt={welder.name} />
                </div>
                <h3>Name: {welder.name}</h3>
                <h3>Age: {welder.age}</h3>
                <h3>Gender: {welder.gender}</h3>
                <h3>Role: {welder.role}</h3>
                <Link to={`/welders/${welder.name}`}><button>Book Your Slot</button></Link>
                <button
                  className='user-cart'
                  onClick={() => addToCart(welder)}>
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

export default Welders
