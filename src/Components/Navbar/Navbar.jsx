import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

// Importing icons for categories
import driverIcon from '../Assets/Drivers=logos.png';
import mechanicIcon from '../Assets/Mechanic-logos.png';
import electricianIcon from '../Assets/electrican-logo (1).png';
import transporterIcon from '../Assets/transporter-logos.png';
import commercialWorkerIcon from '../Assets/worker-logo.jpg';
import domesticWorkerIcon from '../Assets/domesticworker-logo.jpg';
import plumberIcon from '../Assets/plumber.jpg';
import welderIcon from '../Assets/welder-logo.jpg';

const Navbar = () => {
  const { cart } = useCart(); // Access cart from context
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = [
    { name: 'Drivers', path: '/drivers', icon: driverIcon },
    { name: 'Mechanics', path: '/mechanics', icon: mechanicIcon },
    { name: 'Electricians', path: '/electricians', icon: electricianIcon },
    { name: 'Transporters', path: '/transporters', icon: transporterIcon },
    { name: 'Commercial Workers', path: '/commercialworkers', icon: commercialWorkerIcon },
    { name: 'Domestic Workers', path: '/domesticworkers', icon: domesticWorkerIcon },
    { name: 'Plumbers', path: '/plumbers', icon: plumberIcon },
    { name: 'Welders', path: '/welders', icon: welderIcon },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = (path) => {
    navigate(path);
    setSearchQuery(''); // Clear search input after navigation
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className='navsection'>
      <div className="main-nav">
        <div className="title">
          <Link style={{ textDecoration: 'none' }} to='/'>
            <h2>Where is my foreman</h2>
          </Link>
        </div>
        <div className="search">
          <input
            type='text'
            placeholder='Search...'
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <div className="search-results">
              {filteredCategories.map((category) => (
                <div
                  key={category.name}
                  className="search-result-item"
                  onClick={() => handleResultClick(category.path)}
                >
                  <img src={category.icon} alt={category.name} />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="user">
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/login'>
            <h3>SignIn/SignUp</h3>
          </Link>
        </div>
        <div className="favorites">
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/cart'>
            <h2>favorites ({cart.length})</h2> {/* Display cart item count */}
          </Link>
        </div>
        <div className="details">
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/contactus'>
            <h3>Contact Us</h3>
          </Link>
        </div>
      </div>
      <div className="subnav">
        <div className="sub-nav">
          <ul>
            {categories.map(category => (
              <Link key={category.name} style={{ textDecoration: 'none' }} to={category.path}>
                <li><img src={category.icon} alt={category.name} />{category.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
