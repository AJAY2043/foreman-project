import React from 'react';
import { useParams } from 'react-router-dom';
import electricianData from '../Components/Data/electricians.json';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import './Singles.css'; 

const ElectrcianSingle = () => {
    const { name } = useParams(); 
    const electrician = electricianData.electricians.find(electrician => electrician.name === name); // Find electrician by `name`
  
    if (!electrician) {
      return <div>Electrician not found</div>;
    }
  
    return (
      <div>
        <Navbar />

        <center><h2>Hello Sir/Madam Welcome To My Profile</h2></center>

        <div className="single-detailes">
          <div className="single-img-details">
          <div className="single-img-container">
            {/* <img src={imageMap[electrician.image]} alt={electrician.name} /> */}
            <div className="single-price-rating">
            <h3>Name: {electrician.name}</h3>
                <h3>Price: {electrician.price}</h3>
                <h3>Title: {electrician.title}</h3>
                <div className="user-star">Rating:
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_dull_icon} alt="Star Icon" />
                  <p>1878</p>
                </div>
              </div>
            </div>
            <div className="single-text-detailes">
              <h3>Name: {electrician.name}</h3>
              <h3>Age: {electrician.age}</h3>
              <h3>Gender: {electrician.gender}</h3>
              <h3>Language: {electrician.languages}</h3>
              <h3>Role: {electrician.role}</h3>
              <h3>Availability: {electrician.availability}</h3>
              <h3>HaveLicence: {electrician.haveLicence ? 'Yes' : 'No'}</h3>
              <h3>Experience: {electrician.experience}</h3>
              <h3>Description: {electrician.description}</h3>
              <h3>Address: {electrician.address}</h3>
              <h3>Contact: {electrician.contact}</h3>
            </div>
            <div className="submit-detailes">
              <button onClick={()=>alert('Thanks for Contacting Me ')}>Contact Me</button>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    )
  }
  
export default ElectrcianSingle
