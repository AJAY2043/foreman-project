import React from 'react';
import './User.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const User = () => {
  return (
    <div>
      <Navbar />
      <div className="users">
        <h3>Hello, welcome to User Registration</h3>
        <h3>Register Here in 2 Minutes!</h3>
        <p>We hope this platform will help you get new clients.</p>
        <div className="user-form">
          <form className='user-inputs' autoComplete='off'>
            <input type='text' placeholder='Enter your name' /><br />

            <select className='dropdown' name='category'>
              <option value='' disabled selected>Select your category</option>
              <option value='drivers'>Drivers</option>
              <option value='mechanics'>Mechanics</option>
              <option value='electricians'>Electricians</option>
              <option value='transporters'>Transporters</option>
              <option value='plumbers'>Plumbers</option>
              <option value='welders'>Welders</option>
              <option value='domestic_workers'>Domestic Workers</option>
            </select><br />

            <input type='text' placeholder='Your mobile' /><br />
            <input type='number' placeholder='Enter your age' /><br />
            <input type='number' placeholder='Years of experience' /><br />
            <input type='text' placeholder='Enter your price per service' /><br />
            <input type='text' placeholder='Enter your availability (e.g., 9 AM - 5 PM)' /><br />
            <input type='text' placeholder='Enter your address' /><br />
            <input type='text' placeholder='Enter your city' /><br />
            <input type='text' placeholder='Enter your state' /><br />

            <div className='terms-checkbox'>
              <input type='checkbox' id='terms' name='terms' required />
              <label htmlFor='terms'> I agree to the Terms and Conditions</label><br />
              <input type='checkbox' id='privacy' name='privacy' required />
              <label htmlFor='privacy'> I agree to the Privacy Policy</label><br />
            </div>

            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default User;
