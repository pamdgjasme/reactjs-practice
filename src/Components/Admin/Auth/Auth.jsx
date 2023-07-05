import React from 'react'
import { BiLogIn } from 'react-icons/bi'
import { PiFinnTheHuman } from 'react-icons/pi'
import { RiLockPasswordLine } from 'react-icons/ri'
import './auth.css'

function Auth() {
  return (
    <section className='authSection'>
      <div className="loginContent container">
        <div className="loginCard">
          <h4>Login to your account</h4>
          <label htmlFor="username">Username</label>
          <div className="inputBlock flex">
            <input type="text" id='username' />
            <PiFinnTheHuman className="icon" />
          </div>

          <label htmlFor="password">Password</label>
          <div className="inputBlock flex">
            <input type="password" id='password' />
            <RiLockPasswordLine className="icon" />
          </div>

          <div className="signInBtn">
          <button className="btn"><BiLogIn className='icon' />Login</button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Auth