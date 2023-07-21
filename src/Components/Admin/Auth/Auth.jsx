import React from 'react'
import ApiService from '../../../Services/ApiService'
import UserService from '../../../Services/UserService'
import IsLoadingShared from '../../../Shared/IsLoadingShared'
import { BiLogIn } from 'react-icons/bi'
import { PiFinnTheHuman } from 'react-icons/pi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Auth.css'

function Auth({setLoading, setIsUserLoggedIn}) {
  
  const notify  = (message, type = 'default') => {
    const options = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    }
    
    if (type === 'error') {
      toast.error(message, options)
    } else {
      toast.success(message, options)
    }
  }
  
  const headers = (method = 'GET', data = {}) => {
    return { method: method, headers: ApiService.defaultHttpHeader(), body: JSON.stringify(data) };
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    const data = {
      email:    event.target.elements.email.value,
      password: event.target.elements.password.value,
    }

    const response     = await fetch(`${process.env.REACT_APP_API_URL}api/admin/login`, headers('POST', data))
    const responseJson = await response.json()

    if (response.ok) {
      UserService.setCurrentUser(responseJson)
      setTimeout(() => {
        setLoading(false)
        setIsUserLoggedIn(true)
      }, 2000);
    } else {
      notify(responseJson.error, 'error')
    }
  }

  return (
    <section className='authSection'>
      <ToastContainer />
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
    </section>
  )
}

export default IsLoadingShared(Auth, 'Logging you in..', false)
