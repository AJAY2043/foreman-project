import React from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import D_worker_img from '../Components/Assets/chef.jpg'
import domesticWorkers from '../Components/Data/domestic_workers.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const DomesticWorkers = () => {

  const { addToCart } = useCart()

  return (
    <div>
    <Navbar/>
    <div className="subsection">
      <div className="foreman">
      <h3>Hello User!! Find your Domestic Worker Here</h3>
        <h3> At at Your Loaction in 5 mins!</h3>
        <img src={D_worker_img} alt='domestic-worker-img' />
        <div className="main-detailes">
        {domesticWorkers && domesticWorkers.domestic_workers && domesticWorkers.domestic_workers.map((worker)=>{return(
            <div className="user-detailes" key={worker.id}>
              <div className="image-container">
                <img src={worker.image} alt="" />
                </div>
               
                <h3>Name: {worker.name}</h3>
                <h3>Gender: {worker.gender}</h3>
                <h3>Role: {worker.role}</h3>
                <Link to={`/domesticworkers/${worker.name}`}><button>Book Your Slot</button></Link>
                <button className='user-cart'
                onClick={()=>addToCart(worker)}>
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

export default DomesticWorkers
