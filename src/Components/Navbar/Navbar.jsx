import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { Link } from "react-router-dom"

const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const removeNav = () => {
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className='logoDiv'>
          <Link to={'/'} className="logo flex">
            <h1><MdOutlineTravelExplore className='icon'/>  Travel.</h1>
          </Link>
        </div>
        <div className={active}>
          <ul className='navLists flex'>
            <li className="navItem">
              <Link to={'/'} className="navLink">Home</Link>
            </li>
            <li className="navItem">
              <a href='/' className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href='/' className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href='/' className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href='/' className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href='/' className="navLink">News</a>
            </li>
            <li className="navItem">
              <Link to={`/contact-us`} className="navLink">Contact</Link>
            </li>
            <button className='btn'>
              <a href='/'>BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div onClick={showNav} className='toggleNavbar'>
            <TbGridDots className='icon'/>
          </div>
      </header>
    </section>
  )
}

export default Navbar