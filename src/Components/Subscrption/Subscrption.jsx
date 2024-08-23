import React from 'react'
import './Subscrption.css'

const Scubcription = () => {
  return (
    <div className='subscription'>
      <h3>New Subscription ! Comming Soons !!</h3>
      <div className="sub-types">
      <div className="sub-type1">
        <h2>Quarterly</h2>
        <h3>car?bike wash//Monthly</h3>
        <h3>a Brown rice bag-25kg/monthly</h3>
        <h3>a pickle(veg or nonveg) /monthly</h3>
        <h3>cleaning house/once in subscpition</h3>
        <h3 className='price'>Price:4999/-</h3>
        <button>Know More</button>
            <p>T&C* Apply.</p>
      </div>
      <div className="sub-type2">
        <h2>Halfearly</h2>
        <h3>car?bike wash//Monthly once </h3>
        <h3>a Brown rice bag-25kg/monthly</h3>
        <h3>a pickle(veg or nonveg) /monthly</h3>
        <h3>cleaning house/2times in  subscpition</h3>
        <h3  className='price'>Price:7999/-</h3>
        <button>Know More</button>
            <p>T&C* Apply.</p>
      </div>
      <div className="sub-type3">
        <h2>Yearly</h2>
        <h3>car?bike wash//Monthly</h3>
        <h3>a Brown rice bag-25kg/monthly</h3>
        <h3>a pickle(veg or nonveg) /monthly</h3>
        <h3>cleaning house/4times in subscpition</h3>
        <h3  className='price'>Price:9999/-</h3>
        <button>Know More</button>
           <p>T&C* Apply.</p>
      </div>
      </div>
    </div>
  )
}

export default Scubcription
