
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
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
    // try {
      const response = await axios.post('https://historical-sites.onrender.com/api/auth/signup', formData);
      console.log('User signed up successfully:', response.data);
      // Optionally, you can redirect the user to another page or show a success message here
    // } catch (error) {
    //   console.error('Signup failed:', error.response.data);
    //   // If error.response.data.errors is defined and is an array, you can handle it
    //   if (error.response.data.errors && Array.isArray(error.response.data.errors)) {
    //     const errorMessage = error.response.data.errors.map(error => error.msg).join(', ');
    //     setErrorMessage(errorMessage);
    //   } else {
    //     setErrorMessage('An error occurred while signing up. Please try again later.');
    //   }
    // }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
