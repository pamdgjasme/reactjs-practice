import React from 'react'
import './app.css'
import Auth from './Components/Admin/Auth/Auth'
import AdminNavbar from './Components/Admin/Shared/AdminNavbar/AdminNavbar'
import AdminFooter from './Components/Admin/Shared/AdminFooter/AdminFooter'

const App = () => {
  return(
    <>
    <AdminNavbar />
    <Auth />
    <AdminFooter />
    </>
  )
}

export default App