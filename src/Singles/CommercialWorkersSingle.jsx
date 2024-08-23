import React from 'react';
import { useParams } from 'react-router-dom';
import workerData from '../Components/Data/workers.json'; 
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import './Singles.css'; 

const CommercialWorkersSingle = () => {
  const { name } = useParams();
  const worker = workerData.workers.find(worker => worker.name === name);

  if (!worker) {
    return (
  <>
  <Navbar/>
  <center><h1 style={{color:'red'}}>sorry user! : Worker not found</h1>
  <h3 style={{color:'red'}}>Disclimnar:All the Workers are busy right now and unavilable</h3>
  <h4 style={{color:'red'}}>Sorry for the Inconvience caused by where is my foreman!</h4></center>
  <Footer/>
</>    
    )  
  }

  return (
    <div>
      <Navbar />
      <div className="single-detailes">
        <div className="single-img-details">
        <div className="single-img-container">
          {/* <img src={imageMap[worker.image]} alt={worker.name} /> */}
          <div className="single-price-rating">
            <h3>Name: {worker.name}</h3>
              <h3>Price: {worker.price}</h3>
              <h3>Title: {worker.title}</h3>
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
            {/* <h3>Name: {worker.name}</h3> */}
            <h3>Age: {worker.age}</h3>
            <h3>Gender: {worker.gender}</h3>
            <h3>Language: {worker.languages}</h3>
            <h3>Role: {worker.role}</h3>
            <h3>Availability: {worker.availability}</h3>
            <h3>Have Licence: {worker.haveLicence ? 'Yes' : 'No'}</h3>
            <h3>Experience: {worker.experience}</h3>
            <h3>description:{worker.description}</h3>
            <h3>Address: {worker.address}</h3>
            <h3>Contact:{worker.contact}</h3>
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

export default CommercialWorkersSingle