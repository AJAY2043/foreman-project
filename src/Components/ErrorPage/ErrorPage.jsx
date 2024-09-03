import React from 'react';
import './ErrorPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
  return (
    <>
    <Navbar/>
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <div className="game-animation">
          {/* Simple game or animation goes here */}
          <p>Try catching the bouncing ball below!</p>
          <div className="ball"></div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default ErrorPage;
