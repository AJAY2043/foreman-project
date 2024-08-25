import React from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import mechanic_img from '../Components/Assets/mechanic.jpg'
import mechanicData from '../Components/Data/mechanics.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Mechanics = () => {

  const { addToCart } = useCart();

  return (
    <div>
    <Navbar/>
     <div className="subsection">
      <div className="foreman">
      <h3>Hello User!! Find Your Mechanic Here</h3>
      <h3> At Your Loaction in 5 mins</h3>
      <img src={mechanic_img} alt="" />
      <div className="main-detailes">
        {mechanicData.mechanics.map((mechanic)=>{return(
          <div className="user-detailes" key={mechanic.id}>
          <div className="image-container">
            <img src={mechanic.image} alt="" />
            </div>
                
            
            <h3>Name: {mechanic.name}</h3>
            <h3>Age: {mechanic.age} </h3>
            <h3>Gender: {mechanic.gender}</h3>
            <h3>Role: {mechanic.role}</h3>
            <Link to={`/mechanics/${mechanic.name}`}><button>Book Your Slot</button></Link>
            <button 
                  className='user-cart'
                  onClick={() => addToCart(mechanic)}>
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

export default Mechanics
