// import React from 'react'
// import '../Register/Register.css'

// const Login = () => {
//   return (
//     <div className='form'>
//         <h2>Log In</h2>
//         <input type='email' placeholder='E-mail' />
//         <input type='password' placeholder='Password' />
//         <button>Log in</button>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
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
      const response = await axios.post('https://historical-sites.onrender.com/api/auth/login', formData);
      console.log(response.data); // Handle successful login
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
