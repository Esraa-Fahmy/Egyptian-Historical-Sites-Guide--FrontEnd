import React from 'react'

const LogInForm = () => {
  return (
    <div className='form'>
        <h2>Log In</h2>
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Password' />
        <button>Log in</button>
    </div>
  );
}

export default LogInForm;