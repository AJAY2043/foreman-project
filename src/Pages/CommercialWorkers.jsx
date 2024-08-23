import React from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import worker_img from '../Components/Assets/foremans.png'
import workerData from '../Components/Data/workers.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const CommercialWorkers = () => {

    const { addToCart } = useCart()

  return (
    <div>
      <Navbar/>
       <div className="subsection">
        <div className="foreman">
        <h3>Hello User!! Find Your CommercialWorkers Here</h3>
        <h3> At Your Loaction in 5 mins</h3>
        <img src={worker_img} alt="" />
        <div className="main-detailes">
          {workerData.workers.map((worker)=>{return(
            <div className="user-detailes" key={worker.id}>
            <div className="image-container">
              <img src={worker.image} alt="" />
              </div>
              
              <h3>Name: {worker.name}</h3>
              <h3>Age: {worker.age}</h3>
              <h3>Gender: {worker.gender}</h3>
              <h3>Role: {worker.role}</h3>
              <Link to={`/commercialworkers/${worker.name}`}>
              <button>Book Your Slot</button>
              </Link>
              <button 
                  className='user-cart'
                  onClick={() => addToCart(worker)}>
                  Add to Favorites
                </button>
            </div>
        )})}
      </div>
    </div>
  </div>
  <Footer/>
    </div>
  )
}

export default CommercialWorkers
