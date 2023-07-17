import React from 'react'
import './ContactUs.css'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { FiSend } from 'react-icons/fi'

function ContactUs() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
    <NavBar/>
    <section className="contactUsSection container">
      <div className="contactUsBlock">  
        <form onSubmit={handleSubmit}>
          <h3>Contact us...</h3>

          <label htmlFor="email_address">Email Address</label>
          <div className="inputBlock">
            <input type="text" id="email_address"/>
          </div>

          <label htmlFor="full_name">Full Name</label>
          <div className="inputBlock">
            <input type="text" id="full_name"/>
          </div>

          <label htmlFor="message">Message</label>
          <div className="inputBlock">
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </div>

          <div className="flex btnDiv">
            <button className="btn">SEND <FiSend className='icon'/></button>
          </div>
        </form>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default ContactUs
