import React from 'react';
import { useParams } from 'react-router-dom';
import driverData from '../Components/Data/drivers.json';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import './Singles.css';

const DriverSingle = () => {
  const { name } = useParams();
  const driver = driverData.drivers.find(driver => driver.name === name);

  if (!driver) {
    return <div>Driver not found</div>;
  }

  return (
    <div>
      <Navbar />

      <center><h2>Hello Sir/Madam Welcome To My Profile</h2></center>
      
      <div className="single-detailes">
        <div className="single-img-details">
          <div className="single-img-container">
            {/* <img src={imageMap[driver.image]} alt={driver.name} /> */}
            <div className="single-price-rating">
            <h3>Name: {driver.name}</h3>
              <h3>Price: {driver.price}</h3>
              <h3>Title: {driver.title}</h3>
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
            <h3>Name: {driver.name}</h3>
            <h3>Age: {driver.age}</h3>
            <h3>Gender: {driver.gender}</h3>
            <h3>Language: {driver.languages}</h3>
            <h3>Role: {driver.role}</h3>
            <h3>VehicleType: {driver.vehicleType}</h3>
            <h3>Availability: {driver.availability}</h3>
            <h3>Have Licence: {driver.haveLicence ? 'Yes' : 'No'}</h3>
            <h3>Experience: {driver.experience}</h3>
            <h3>Description: {driver.description}</h3>
            <h3>Address: {driver.address}</h3>
            <h3>Contact: {driver.contact}</h3>
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

export default DriverSingle
