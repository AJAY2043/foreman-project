import React, { useState } from 'react';
import './Login.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';

const LoginSignUp = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign-up and login
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setError('');

    try {
      await axios.post('https://react-foreman-default-rtdb.firebaseio.com/users.json', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert('User registered successfully');
      onLogin(); // Log the user in after successful sign-up
    } catch (error) {
      console.error('Error registering user:', error);
      setError('An error occurred while registering');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://react-foreman-default-rtdb.firebaseio.com/users.json');
      const users = response.data;

      const foundUser = Object.values(users).find(
        user => user.email === formData.email && user.password === formData.password
      );

      if (foundUser) {
        alert('Login successful!');
        onLogin(); // Log the user in after successful login
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred while trying to log in');
    }
  };

  return (
    <>
      <Navbar />
      <div className='login-signup'>
        <div className="login-signup-container">
          <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
          <div className="login-signup-fields">
            {isSignUp && (
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                value={formData.name}
                onChange={handleInputChange}
              />
            )}
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleInputChange}
            />
            {isSignUp && (
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            )}
          </div>
          {error && <p className='error-message'>{error}</p>}
          <button onClick={isSignUp ? handleSignUp : handleLogin}>
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
          <p className='login-signup-toggle'>
            {isSignUp
              ? 'Already have an account?'
              : "Don't have an account?"}{' '}
            <span onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Login Here' : 'Sign Up Here'}
            </span>
          </p>
          {isSignUp && (
            <div className="login-signup-agree">
              <input type='checkbox' id='agree' />
              <label htmlFor='agree'>By continuing, I agree to the terms of use & privacy policy</label>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginSignUp;
