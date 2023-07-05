import React from 'react'
import './App.css'
import Auth from './Components/Admin/Auth/Auth'
import AdminNavbar from './Components/Admin/AdminNavbar/AdminNavbar'
import AdminFooter from './Components/Admin/AdminFooter/AdminFooter'
import AdminHome from './Components/Admin/AdminHome/AdminHome'

const App = () => {
  const isUserLoggedIn = true
  const username = 'Geneva'
  return(
    <>
    <AdminNavbar username={ isUserLoggedIn ? username : null} />
    { 
      isUserLoggedIn ? <AdminHome/> : <Auth />
    }
    <AdminFooter />
    </>
  )
}

export default App