import React, { Component } from 'react'
import { MdOutlineTravelExplore } from 'react-icons/md'

export class Navbar extends Component {
  render() {
    return (
      <section className='adminNavSection'>
        <header className="header flex">
          <div className="logodiv">
            <a href='#' className='logo flex'>
              <h1><MdOutlineTravelExplore className='icon'/>  Travel.</h1>
            </a>
          </div>
        </header>
      </section>
    )
  }
}

export default Navbar
