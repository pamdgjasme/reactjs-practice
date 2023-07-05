import React, { Component } from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import './AdminNavbar.css'
export class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='adminNavSection'>
        <header className="header flex">
          <div className="logodiv">
            <a href='#' className='logo flex'>
              <h1><MdOutlineTravelExplore className='icon'/>  Travel.</h1>
            </a>
          </div>
          <div className="userInformation">
            <span>{this.props.username}</span> <CgProfile className='icon'/>
          </div>
        </header>
      </section>
    )
  }
}

export default Navbar
