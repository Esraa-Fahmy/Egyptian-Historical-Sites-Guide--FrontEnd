import React, {useState} from 'react';
import './Register.css';
import SignUoForm from '../Register/SignUpForm/SignUpForm';
import LogInForm from '../Register/LogInForm/LogInForm';

function Register() {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className='Register'>
      <div className='form-container'>
        <div className='form-switch'>
          <div className={isSignUp ? 'active' : 'signUp'} onClick={() => toggleForm()}>
            Sign Up
          </div>
          <div className={!isSignUp ? 'active' : 'logIn'} onClick={() => toggleForm()}>
            Log In
          </div>
        </div>
        {isSignUp ? <SignUoForm /> : <LogInForm />}
      </div>
    </div>
  );
}

export default Register;

