import React, { useState } from 'react'
import './App.css'
import Auth from './Components/Admin/Auth/Auth'
import AdminNavbar from './Components/Admin/AdminNavbar/AdminNavbar'
import AdminFooter from './Components/Admin/AdminFooter/AdminFooter'
import AdminHome from './Components/Admin/AdminHome/AdminHome'

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('currentUserFullname'))

  return(
    <>
      <AdminNavbar />
      { 
        isUserLoggedIn ? <AdminHome/> : <Auth setIsUserLoggedIn={setIsUserLoggedIn} />
      }
      <AdminFooter />
    </>
  )
}

export default App