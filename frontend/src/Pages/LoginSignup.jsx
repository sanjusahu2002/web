import React from 'react'
import './Css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="signup-form">
        <h1>Sign Up</h1>
        <div className="signup-inputs">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p>Already have an account ? <span> Login here</span></p>
        <div className='signup-checkbox'>
          <input type="checkbox" />
          By continuing, I agree to the terms of use & privary policy.
        </div>
      </div>
    </div>
  )
}

export default LoginSignup