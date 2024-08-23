import React from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import electrican_img from '../Components/Assets/electrcian.jpg'
import electricianData from '../Components/Data/electricians.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Electrcian = () => {
    
  const { addToCart } = useCart(); 

  return (
    <div>
      <Navbar/>
       <div className="subsection">
        <div className="foreman">
        <h3>Hello User!! Find Your Electrician Here</h3>
        <h3> At Your Loaction in 5 mins</h3>
        <img src={electrican_img} alt="" />
        <div className="main-detailes">
          {electricianData.electricians.map((electrcian)=>{return(
            <div className="user-detailes" key={electrcian.id}>
            <div className="image-container">
              <img src={electrcian.image} alt="" />
              </div>
              
              <h3>Name: {electrcian.name}</h3>
              <h3>Gender: {electrcian.gender}</h3>
              <h3>Role: {electrcian.role}</h3>
              <Link to={`/electricians/${electrcian.name}`}><button>Book Your Slot</button></Link>
              <button 
                  className='user-cart'
                  onClick={() => addToCart(electrcian)}>
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

export default Electrcian
