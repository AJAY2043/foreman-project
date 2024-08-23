import React from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar'
import welders_img from '../Components/Assets/welder.jpg'
import Footer from '../Components/Footer/Footer'
import welderData from '../Components/Data/welders.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Welders = () => {

    const { addToCart } = useCart()

  return (
    <div>
    <Navbar/>
     <div className="subsection">
      <div className="foreman">
      <h3>Hello User!! Find Your Electrician Here</h3>
      <h3> At Your Loaction in 5 mins</h3>
      <img src={welders_img} alt="" />
      <div className="main-detailes">
        {welderData.welders.map((welder)=>{return(
          <div className="user-detailes" key={welder.id}>
          <div className="image-container">
            <img src={welder.image} alt="" />
            </div>
           
            <h3>Name: {welder.name}</h3>
            <h3>Gender: {welder.gender}</h3>
            <h3>Role: {welder.role}</h3>
            <Link to={`/welders/${welder.name}`}><button>Book Your Slot</button></Link>
            <button 
            className='user-cart'
              onClick={() => addToCart(welder)} >
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

export default Welders
