import React, { Component } from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import './AdminNavbar.css'
import { Link } from "react-router-dom"

class Navbar extends Component {
  render() {
    const adminUsername = localStorage.getItem('currentUserFullname');
    
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
          </div>
        </header>
      </section>
    )
  }
}

export default Navbar
