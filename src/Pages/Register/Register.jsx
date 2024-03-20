// import React from 'react';
// import './Register.css'

// const Register = () => {
//   return (
//     <div className='form'>
//         <h2>Sign Up</h2>
//         <input type='text' placeholder='User Name' />
//         <input type='email' placeholder='E-mail' />
//         <input type='password' placeholder='Password' />
//         <input type='password' placeholder='Confirm Password'/>
//         <button>Register</button>
      
//     </div>
//   );
// }

// export default Register;







import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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
      const response = await axios.post('https://historical-sites.onrender.com/api/auth/signup', formData);
      console.log(response.data); // Handle successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='form'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='User Name'
          value={formData.username}
          onChange={handleChange}
        />
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
        <input
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Register;
