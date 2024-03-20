// // import React from 'react';
// // import './Register.css'

// // const Register = () => {
// //   return (
// //     <div className='form'>
// //         <h2>Sign Up</h2>
// //         <input type='text' placeholder='User Name' />
// //         <input type='email' placeholder='E-mail' />
// //         <input type='password' placeholder='Password' />
// //         <input type='password' placeholder='Confirm Password'/>
// //         <button>Register</button>
      
// //     </div>
// //   );
// // }

// // export default Register;







// import React, { useState } from 'react';
// import axios from 'axios';
// import './Register.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://historical-sites.onrender.com/api/auth/signup', formData);
//       console.log(response.data); // Handle successful registration
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <div className='form'>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type='text'
//           name='username'
//           placeholder='User Name'
//           value={formData.username}
//           onChange={handleChange}
//         />
//         <input
//           type='email'
//           name='email'
//           placeholder='E-mail'
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type='password'
//           name='password'
//           placeholder='Password'
//           value={formData.password}
//           onChange={handleChange}
//         />
//         <input
//           type='password'
//           name='confirmPassword'
//           placeholder='Confirm Password'
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         <button type='submit'>Register</button>
//       </form>
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
    passwordConfirm: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.passwordConfirm) {
      setErrorMessage('Password and Confirm Password do not match');
      return;
    }
    try {
      const response = await axios.post('https://historical-sites.onrender.com/api/auth/signup', formData);
      console.log('User signed up successfully:', response.data);
      
      
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
      <form onSubmit={handleSubmit}>
        {error && <p className="error-message">{error}</p>}
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
