import React from 'react';

const SignUpForm = () => {
  return (
    <div className='form'>
        <h2>Sign Up</h2>
        <input type='text' placeholder='User Name' />
        <input type='email' placeholder='E-mail' />
        <input type='password' placeholder='Password' />
        <input type='password' placeholder='Confirm Password'/>
        <button>Register</button>
        <div className='switch'>
            Already have an account ? <span onClick={() => console.log('Switch to login')}>Log in</span>          
        </div>
    </div>
  );
}

export default SignUpForm;
