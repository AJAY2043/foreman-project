import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import transporters_img from '../Components/Assets/transporters.jpg'
import Footer from '../Components/Footer/Footer'
import transporterData from '../Components/Data/transporters.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Transporters = () => {

    const { addToCart }= useCart()
    const [locationFilter, setLocationFilter] = useState('');

    // Get unique locations for the dropdown filter
    const getUniqueLocations = () => {
        const locations = transporterData.transporters.map(transporter => transporter.address);
        return [...new Set(locations)];
    };

    // Filter transporters based on the selected location
    const filteredTransporters = transporterData.transporters.filter(transporter =>
        !locationFilter || transporter.address.includes(locationFilter)
    );

    return (
        <div>
            <Navbar />
            <div className="subsection">
                <div className="foreman">
                    <h3>Hello User!! Find Your Transporter Here</h3>
                    <h3>At Your Location in 5 mins</h3>
                    <img src={transporters_img} alt="Transporters" />
                    <Link to='/usersregistration'>
                        <button className='user-btn'>Register Here for Free</button>
                    </Link>

                    <div className="filters">
                        <h4>Filter Transporters</h4>

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
                        {filteredTransporters.map((transporter) => (
                            <div className="user-detailes" key={transporter.id}>
                                <div className="image-container">
                                    <img src={transporter.image} alt={transporter.name} />
                                </div>

                                <h3>Name: {transporter.name}</h3>
                                <h3>Age: {transporter.age}</h3>
                                <h3>Gender: {transporter.gender}</h3>
                                <h3>Role: {transporter.role}</h3>
                                <Link to={`/transporters/${transporter.name}`}>
                                    <button>Book Your Slot</button>
                                </Link>
                                <button
                                    className='user-cart'
                                    onClick={() => addToCart(transporter)}>
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

export default Transporters
