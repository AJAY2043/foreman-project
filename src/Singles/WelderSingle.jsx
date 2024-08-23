import React from 'react';
import { useParams } from 'react-router-dom';
import welderData from '../Components/Data/welders.json';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import './Singles.css';

const WelderSingle = () => {
    const { name } = useParams();
    const welder = welderData.welders.find(welder => welder.name === name);
  
    if (!welder) {
      return <div>Welder not found</div>;
    }
  
    return (
      <div>
        <Navbar />
        <div className="single-detailes">
          <div className="single-img-details">
          <div className="single-img-container">
            {/* <img src={imageMap[welder.image]} alt={welder.name} /> */}
            <div className="single-price-rating">
                <h3>Name: {welder.name}</h3>
                <h3>Price: {welder.price}</h3>
                <h3>Title: {welder.title}</h3>
                <div className="user-star">Rating:
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_dull_icon} alt="Star Icon" />
                  <p>1998</p>
                </div>
              </div>
            </div>
            <div className="single-text-detailes">
              <h3>Name: {welder.name}</h3>
              <h3>Age: {welder.age}</h3>
              <h3>Gender: {welder.gender}</h3>
              <h3>Language: {welder.languages}</h3>
              <h3>Role: {welder.role}</h3>
              <h3>Availability: {welder.availability}</h3>
              <h3>Have Licence: {welder.haveLicence ? 'Yes' : 'No'}</h3>
              <h3>Experience: {welder.experience}</h3>
              <h3>description:{welder.description}</h3>
              <h3>Address: {welder.address}</h3>
              <h3>Contact: {welder.contact}</h3>
            </div>
            <div className="submit-detailes">
              <button onClick={()=>alert('Thanks for Contacting Me ')}>Contact Me</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

export default WelderSingle
