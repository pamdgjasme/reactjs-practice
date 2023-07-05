import React, { Component } from 'react'
import { AiOutlineMail, AiOutlineEdit } from 'react-icons/ai'
import './AdminHome.css'

class AdminHome extends Component {
  render() {
    return (
      <section className="adminHomeSection container">
        <div className="cardBlock">
          <div className="cardContent">
            <h4 className="cardTitle">Your Listings<small className="listingCount">7</small></h4>
            <p className="description">Recently booked: NY</p>
          </div>
          <div className="cardContent">
            <h4 className="cardTitle">Contact us <AiOutlineMail className='icon'/></h4>
            <p className="description">We are one email away! Message us for questions and concerns.</p>
          </div>
          <div className="cardContent">
            <h4 className="cardTitle">Update your profile<AiOutlineEdit className='icon'/></h4>
            <p className="description">Last update: March 03, 2022</p>
          </div>
        </div>
      </section>
    )
  }
}

export default AdminHome