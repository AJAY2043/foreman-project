import React from 'react';
import hero_img from '../Assets/hero.jpg';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to Where is My Foreman!</h1>
      
<p className="hero-subtitle">Find the best professionals in your area, from general to professional needs.</p>

      <div>
        <img src={hero_img} alt="Hero" />
      </div>
      <Link to='/'><button className="hero-cta">Look for Your ForeMan</button></Link>
    </div>
  );
}

export default Hero;
