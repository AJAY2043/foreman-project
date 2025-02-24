import React from 'react';
import './Contactus.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Contactus = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" placeholder="Subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Contactus;
