import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Find the Right Professional?</h2>
        <p className="cta-description">
          Whether you need a driver, a mechanic, or any other professional, we've got you covered.
          Join us today and get access to the best services in your area.
        </p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default CallToAction;
