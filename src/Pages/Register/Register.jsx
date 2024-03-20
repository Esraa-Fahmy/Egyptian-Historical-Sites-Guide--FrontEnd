import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      setErrorMessage('Password and Confirm Password do not match');
      return;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Invalid email address');
      return;
    }
    // Password length validation
    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await axios.post('https://historical-sites.onrender.com/api/auth/signup', formData);
      console.log('User signed up successfully:', response.data);
      // Optionally, you can redirect the user to another page or show a success message here
      window.location.href = '/login';
    } catch (error) {
      console.error('Signup failed:', error.response.data);
      // If error.response.data.errors is defined and is an array, you can handle it
      if (error.response.data.errors && Array.isArray(error.response.data.errors)) {
        const errorMessage = error.response.data.errors.map(error => error.msg).join(', ');
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage('An error occurred while signing up. Please try again later.');
      }
    }
  };

  return (
    <div className='form'>
      <h2>Sign Up</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='User Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='E-mail'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='passwordConfirm'
          placeholder='Confirm Password'
          value={formData.passwordConfirm}
          onChange={handleChange}
          required
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Register;
