import React from 'react';
import { useParams } from 'react-router-dom';
import plumberData from '../Components/Data/plumbers.json';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import './Singles.css';


const PlumberSingle = () => {
    const { name } = useParams();
    const plumber = plumberData.plumbers.find(plumber => plumber.name === name);
  
    if (!plumber) {
      return <div>Plumber not found</div>;
    }
  
    return (
      <div>
        <Navbar />
        <div className="single-detailes">
          <div className="single-img-details">
          <div className="single-img-container">
            {/* <img src={imageMap[plumber.image]} alt={plumber.name} /> */}
            <div className="single-price-rating">
                <h3>Name: {plumber.name}</h3>
                <h3>Price: {plumber.price}</h3>
                <h3>Title: {plumber.title}</h3>
                <div className="user-star">Rating:
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_icon} alt="Star Icon" />
                  <img src={star_dull_icon} alt="Star Icon" />
                  <p>1273</p>
                </div>
              </div>
            </div>
            <div className="single-text-detailes">
              <h3>Name: {plumber.name}</h3>
              <h3>Age: {plumber.age}</h3>
              <h3>Gender:{plumber.gender}</h3>
              <h3>Language: {plumber.languages}</h3>
              <h3>Role: {plumber.role}</h3>
              <h3>Availability: {plumber.availability}</h3>
              <h3>Have Licence: {plumber.haveLicence ? 'Yes' : 'No'}</h3>
              <h3>Experience: {plumber.experience}</h3>
              <h3>description:{plumber.description}</h3>
              <h3>Address: {plumber.address}</h3>
              <h3>Contact: {plumber.contact}</h3>
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

export default PlumberSingle
