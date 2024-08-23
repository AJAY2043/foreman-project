import React from 'react';
import { useParams } from 'react-router-dom';
import transporterData from '../Components/Data/transporters.json'; 
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import './Singles.css'; 

const TransporterSingle = () => {
    const { name } = useParams();
    const transporter = transporterData.transporters.find(transporter => transporter.name === name);
  
    if (!transporter) {
      return <div>Transporter not found</div>;
    }
  
    return (
      <div>
        <Navbar />
        <div className="single-detailes">
          <div className="single-img-details">
          <div className="single-img-container">
            {/* <img src={imageMap[transporter.image]} alt={transporter.name} /> */}
            <div className="single-price-rating">
                <h3>Name: {transporter.name}</h3>
                <h3>Price: {transporter.price}</h3>
                <h3>Title: {transporter.title}</h3>
                <div className="user-star">Rating:
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_dull_icon} alt="Star Icon" />
                  <p>1543</p>
                </div>
              </div>
            </div>
            <div className="single-text-detailes">
              <h3>Name: {transporter.name}</h3>
              <h3>Age: {transporter.age}</h3>
              <h3>Gender: {transporter.gender}</h3>
              <h3>Language: {transporter.languages}</h3>
              <h3>Role: {transporter.role}</h3>
              <h3>Availability: {transporter.availability}</h3>
              <h3>Have Licence: {transporter.haveLicence ? 'Yes' : 'No'}</h3>
              <h3>Experience: {transporter.experience}</h3>
              <h3>description:{transporter.description}</h3>
              <h3>Address: {transporter.address}</h3>
              <h3>Contact:{transporter.contact}</h3>
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
  

export default TransporterSingle
