import React from 'react'
import './Pages.css'
import Navbar from '../Components/Navbar/Navbar'
import plumber_img from '../Components/Assets/plumber.jpg' 
import Footer from '../Components/Footer/Footer'
import plumberData from '../Components/Data/plumbers.json'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const Plumbers = () => {

  const { addToCart } = useCart()
  return (
    <div>
    <Navbar/>
     <div className="subsection">
      <div className="foreman">
      <h3>Hello User!! Find Your Electrician Here</h3>
      <h3> At Your Loaction in 5 mins</h3>
      <img src={plumber_img} alt="" />
      <div className="main-detailes">
        {plumberData.plumbers.map((plumber)=>{return(
          <div className="user-detailes" key={plumber.id}>
          <div className="image-container">
            <img src={plumber.image} alt="" />
            </div>
           
            <h3>Name: {plumber.name}</h3>
            <h3>Gender: {plumber.gender}</h3>
            <h3>Role: {plumber.role}</h3>
            <Link to={`/plumbers/${plumber.name}`}><button>Book Your Slot</button></Link>
            <button  className='user-cart'
                  onClick={() => addToCart(plumber)}>
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

export default Plumbers
