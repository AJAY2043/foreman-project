import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2 className="why-title">Why Choose Us?</h2>
      <div className="why-benefits">
        <div className="benefit-item">
          <img src="path_to_your_icon1" alt="Wide Range of Services" className="benefit-icon" />
          <h3>Wide Range of Services</h3>
          <p>From drivers to mechanics, we have professionals for all your needs.</p>
        </div>
        <div className="benefit-item">
          <img src="path_to_your_icon2" alt="Verified Professionals" className="benefit-icon" />
          <h3>Verified Professionals</h3>
          <p>All our professionals are vetted and verified to ensure quality service.</p>
        </div>
        <div className="benefit-item">
          <img src="path_to_your_icon3" alt="Quick and Easy Booking" className="benefit-icon" />
          <h3>Quick and Easy Booking</h3>
          <p>Book your service in just a few clicks and enjoy peace of mind.</p>
        </div>
        <div className="benefit-item">
          <img src="path_to_your_icon4" alt="24/7 Customer Support" className="benefit-icon" />
          <h3>24/7 Customer Support</h3>
          <p>We are here to help you anytime, anywhere.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
