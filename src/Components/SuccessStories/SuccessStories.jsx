import React from 'react';
import './SuccessStories.css';
import star_logo from '../Assets/star_icon.png';
import star_dull_logo from '../Assets/star_dull_icon.png';
import { Link } from 'react-router-dom';

const SuccessStories = () => {
  // Replace the sample data with real testimonials
  const testimonials = [
    {
      name: "Vinay Reddy",
      rating: (
        <div className="rating">
          Rating:
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_dull_logo} alt="Star Icon" />
          <p>4.5</p>
        </div>
      ),
      location: "Narasaraopet, AP",
      feedback: "The service was excellent! I found a reliable driver in no time. Highly recommended!",
      image: "path_to_testimonial_image1"
    },
    {
      name: "Vamsi Kumar",
      rating: (
        <div className="rating">
          Rating:
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_dull_logo} alt="Star Icon" />
          <p>4.9</p>
        </div>
      ),
      location: "Miryalaguda, TS",
      feedback: "Quick and easy booking process. The mechanic I hired was very professional.",
      image: "path_to_testimonial_image2"
    },
    {
      name: "Ravi Krishna",
      rating: (
        <div className="rating">
          Rating:
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_logo} alt="Star Icon" />
          <img src={star_dull_logo} alt="Star Icon" />
          <p>4.7</p>
        </div>
      ),
      location: "Vijayawada, AP",
      feedback: "I’m very impressed with the quality of service. The electrician solved my problem quickly.",
      image: "path_to_testimonial_image3"
    }
  ];

  return (
    <>
    
    <section className="success-stories">
      <h2 className="success-title">Success Stories</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <div className="testimonial-rating">{testimonial.rating}</div>
            <p className="testimonial-location">{testimonial.location}</p>
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
    <Link to='/userstories'><button className="know-more-btn">Know More</button></Link>
    </>
  );
};

export default SuccessStories;
