import React from 'react';
import './SuccessStories.css';
import star_logo from '../Assets/star_icon.png';
import star_dull_logo from '../Assets/star_dull_icon.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const SuccessStories = () => {
  // Array of testimonials
  const testimonials = [
    { name: "Vinay Reddy", rating: 4.5, location: "Narasaraopet, AP", feedback: "The service was excellent! I found a reliable driver in no time. Highly recommended!", image: "path_to_testimonial_image1" },
    { name: "Vamsi Kumar", rating: 4.9, location: "Miryalaguda, TS", feedback: "Quick and easy booking process. The mechanic I hired was very professional.", image: "path_to_testimonial_image2" },
    { name: "Ravi Krishna", rating: 4.7, location: "Vijayawada, AP", feedback: "I’m very impressed with the quality of service. The electrician solved my problem quickly.", image: "path_to_testimonial_image3" },
    { name: "Sumanth Rao", rating: 4.6, location: "Guntur, AP", feedback: "The service was prompt and professional. Will definitely use again.", image: "path_to_testimonial_image4" },
    { name: "Priya Sharma", rating: 4.8, location: "Hyderabad, TS", feedback: "Excellent service and very reliable. Found the best plumber in no time.", image: "path_to_testimonial_image5" },
    { name: "Kumar Swamy", rating: 4.2, location: "Kakinada, AP", feedback: "Good service but could improve response time.", image: "path_to_testimonial_image6" },
    { name: "Anil Kumar", rating: 4.9, location: "Rajahmundry, AP", feedback: "Top-notch service! The electrician was very knowledgeable.", image: "path_to_testimonial_image7" },
    { name: "Meera Patel", rating: 4.5, location: "Warangal, TS", feedback: "Had a great experience. The driver was very courteous.", image: "path_to_testimonial_image8" },
    { name: "Rakesh Yadav", rating: 4.7, location: "Nellore, AP", feedback: "Service was good and the booking process was smooth.", image: "path_to_testimonial_image9" },
    { name: "Divya Rani", rating: 4.6, location: "Tirupati, AP", feedback: "The mechanic was punctual and did a great job.", image: "path_to_testimonial_image10" },
    { name: "Siddharth Jain", rating: 4.8, location: "Khammam, TS", feedback: "The service exceeded my expectations. Highly recommend.", image: "path_to_testimonial_image11" },
    { name: "Sneha Agarwal", rating: 4.3, location: "Vizag, AP", feedback: "Good experience overall, but there is room for improvement.", image: "path_to_testimonial_image12" },
    { name: "Vikram Singh", rating: 4.7, location: "Bhubaneswar, TS", feedback: "Great service, the driver was very professional.", image: "path_to_testimonial_image13" },
    { name: "Anushka S", rating: 4.4, location: "Kakinada, AP", feedback: "Service was satisfactory, but there were minor delays.", image: "path_to_testimonial_image14" },
    { name: "Rajesh Kumar", rating: 4.6, location: "Vijayawada, AP", feedback: "Very reliable service. The mechanic did an excellent job.", image: "path_to_testimonial_image15" }
  ];

  return (
    <>
    <Navbar/>
      <section className="success-stories">
        <h2 className="success-title">Success Stories</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <div className="testimonial-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? star_logo : star_dull_logo}
                    alt="Star Icon"
                    className="star-icon"
                  />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <img
                    src={star_logo}
                    alt="Half Star Icon"
                    className="star-icon"
                    style={{ width: '16px', height: '16px', marginLeft: '2px' }}
                  />
                )}
                <p className="rating-value">{testimonial.rating.toFixed(1)}</p>
              </div>
              <p className="testimonial-location">{testimonial.location}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </section>
      <Link to='/'><button className="know-more-btn">Back to Home</button></Link>
    <Footer/>
    </>
  );
};

export default SuccessStories;
