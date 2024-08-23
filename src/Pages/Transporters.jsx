import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import transporters_img from '../Components/Assets/transporters.jpg'
import Footer from '../Components/Footer/Footer'
import transporterData from '../Components/Data/transporters.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'


const Transporters = () => {

    const { addToCart }= useCart()
  return (
    <div>
    <Navbar/>
     <div className="subsection">
      <div className="foreman">
      <h3>Hello User!! Find Your Electrician Here</h3>
      <h3> At Your Loaction in 5 mins</h3>
      <img src={transporters_img} alt="" />
      <div className="main-detailes">
        {transporterData.transporters.map((transporter)=>{return(
          <div className="user-detailes" key={transporter.id}>
          <div className="image-container">
            <img src={transporter.image} alt="" />
            </div>
            
            <h3>Name: {transporter.name}</h3>
            <h3>Gender: {transporter.gender}</h3>
            <h3>Role: {transporter.role}</h3>
            <Link to={`/transporters/${transporter.name}`}><button>Book Your Slot</button></Link>
            <button 
                  className='user-cart'
                  onClick={() => addToCart(transporter)}>
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

export default Transporters
