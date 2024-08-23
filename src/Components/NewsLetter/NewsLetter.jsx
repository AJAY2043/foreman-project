import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>Get Exclusive News on your Email</h1>
    <p>Subcribe to our newletter and stay updated</p>  
    <div>
     <input type='email' placeholder='your email id'/>
     <button>Subscribe</button>
    </div>     
</div>
  )
}

export default NewsLetter
