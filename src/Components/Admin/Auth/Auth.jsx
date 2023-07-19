import React, { useState } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { PiFinnTheHuman } from 'react-icons/pi'
import { RiLockPasswordLine } from 'react-icons/ri'
import './auth.css'
import ApiService from '../../../Services/ApiService'
import { ProgressBar } from  'react-loader-spinner'
import UserService from '../../../Services/UserService'

function Auth({setIsUserLoggedIn}) {
  const [showLoader, setShowLoader] = useState(false)
  
  const headers = (method = 'GET', data = {}) => {
    return { method: method, headers: ApiService.defaultHttpHeader(), body: JSON.stringify(data) };
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setShowLoader(true);

    const data = {
      email:    event.target.elements.email.value,
      password: event.target.elements.password.value,
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}api/admin/login`, headers('POST', data))
    const responseJson = await response.json();

    if (response.ok) {
      setShowLoader(false);
      UserService.setCurrentUser(responseJson)
      setIsUserLoggedIn(true)
    } else {
      console.log(responseJson.error)
    }
  }

  return (
    <section className='authSection'>
      { showLoader && 
        <div className="overlay">
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor='#F4442E'
            barColor='#51E5FF'
          />
        </div>
      }
      {
        !showLoader && 
        <div className="loginContent container">
          <form onSubmit={onSubmit} className="loginCard">
            <h4>Login to your account</h4>
            <label htmlFor="email">Email</label>
            <div className="inputBlock flex">
              <input type="text" id='email' />
              <PiFinnTheHuman className="icon" />
            </div>

            <label htmlFor="password">Password</label>
            <div className="inputBlock flex">
              <input type="password" id='password' />
              <RiLockPasswordLine className="icon" />
            </div>

            <div className="signInBtn">
              <button className="btn" type='submit'><BiLogIn className='icon' />Login</button>
            </div>
          </form>
        </div>
      }
    </section>
  )
}

export default Auth