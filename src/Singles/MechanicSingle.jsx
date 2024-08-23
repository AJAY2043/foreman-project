import React from 'react';
import { useParams } from 'react-router-dom';
import mechanicData from '../Components/Data/mechanics.json';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import './Singles.css';

const MechanicSingle = () => {
  const { name } = useParams();
  const mechanic = mechanicData.mechanics.find(mechanic => mechanic.name === name);

  if (!mechanic) {
    return <div>Mechanic not found</div>;
  }

  return (
    <div>
      <Navbar />
      <center><h2>Hello Sir/Madam Welcome To My Profile</h2></center>

      <div className="single-detailes">
        <div className="single-img-details">
        <div className="single-img-container">
          {/* <img src={imageMap[mechanic.image]} alt={mechanic.name} /> */}
          <div className="single-price-rating">
              <h3>Name: {mechanic.name}</h3>
              <h3>Price: {mechanic.price}</h3>
              <h3>Title: {mechanic.title}</h3>
              <div className="user-star">Rating:
                <img src={star_icon} alt="Star Icon" />
                <img src={star_icon} alt="Star Icon" />
                <img src={star_icon} alt="Star Icon" />
                <img src={star_icon} alt="Star Icon" />
                <img src={star_dull_icon} alt="Star Icon" />
                <p>3468</p>
              </div>
            </div>
          </div>
          <div className="single-text-detailes">
            <h3>Name: {mechanic.name}</h3>
            <h3>Age: {mechanic.age}</h3>
            <h3>Gender:{mechanic.gender}</h3>
            <h3>Lanuages: {mechanic.languages}</h3>
            <h3>Role: {mechanic.role}</h3>
            <h3>Availability: {mechanic.aviliability}</h3>
            <h3>Have Licence: {mechanic.haveLicence ? 'Yes' : 'No'}</h3>
            <h3>Experience: {mechanic.experience}</h3>
            <h3>description:{mechanic.description}</h3>
            <h3>Address: {mechanic.address}</h3>
            <h3>Contact:{mechanic.contact}</h3>
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
export default MechanicSingle
