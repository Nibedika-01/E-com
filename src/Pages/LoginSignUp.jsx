import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className='loginSignup'>
      <div className="loginSignupContainer">
        <h2>Sign Up</h2>
        <div className="loginSignupFields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginSignupLogin">Already have an account? <span>Login here</span></p>
        <div className="loginSignupAgree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
