import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext'; // Import the useCart hook

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
  return (
    <div className='navsection'>
      <div className="main-nav">
        <div className="title">
          <Link style={{ textDecoration: 'none' }} to='/'>
            <h2>Where is my foreman</h2>
          </Link>
        </div>
        <div className="search">
          <input type='text' placeholder='Search...' />
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
            <Link style={{ textDecoration: 'none' }} to='/drivers'>
              <li><img src={driverIcon} alt="Drivers" />Drivers</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/mechanics'>
              <li><img src={mechanicIcon} alt="Mechanics" />Mechanics</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/electricians'>
              <li><img src={electricianIcon} alt="Electricians" />Electricians</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/transporters'>
              <li><img src={transporterIcon} alt="Transporters" />Transporters</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/commercialworkers'>
              <li><img src={commercialWorkerIcon} alt="Commercial Workers" />Commercial Workers</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/domesticworkers'>
              <li><img src={domesticWorkerIcon} alt="Domestic Workers" />Domestic Workers</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/plumbers'>
              <li><img src={plumberIcon} alt="Plumbers" />Plumbers</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to='/welders'>
              <li><img src={welderIcon} alt="Welders" />Welders</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
