import React from 'react';
import hero_img from '../Assets/hero.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to Where is my foreman !</h1>
      <div>
        <img src={hero_img} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
