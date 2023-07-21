import React from 'react'
import UserService from '../../../Services/UserService'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineLogout } from 'react-icons/ai'
import { Link } from "react-router-dom"
import './AdminNavbar.css'

function Navbar() {
  const adminUsername = localStorage.getItem('currentUserFullname');

  const logout = () => {
    UserService.logout()
    window.location.href = '/admin'
  }

  return (
    <section className='adminNavSection'>
      <header className="header flex">
        <div className="logodiv">
          <Link to={`/admin`} className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon'/>  Travel.</h1>
          </Link>
        </div>
        <div className="userInformation">
          <span>{adminUsername}</span> <CgProfile className='icon'/>
          <AiOutlineLogout className='icon' onClick={logout}/>
        </div>
      </header>
    </section>
  )
}

export default Navbar
