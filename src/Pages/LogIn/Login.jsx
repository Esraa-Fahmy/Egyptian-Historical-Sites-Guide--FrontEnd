import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://historical-sites.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const userData = await response.json();
      console.log(userData)

      // Check the role of the logged-in user
      if (userData.data.role === 'admin') {
        // Redirect to admin page for admin users
        window.location.href = '/admin';
      } else {
        // Redirect to home page for regular users
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='form'>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='E-mail'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}

export default Login;