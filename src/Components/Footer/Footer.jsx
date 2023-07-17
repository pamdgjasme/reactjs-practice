import React, { useEffect } from 'react'
import './footer.css'
import video from '../../Assets/video.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted typeof='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Welcome to Travel., where unforgettable travel experiences begin. Our expert team is dedicated to crafting personalized itineraries that cater to your unique preferences and interests. With a commitment to excellence, sustainability, and responsible travel, we create seamless and unforgettable journeys that leave a positive impact on the world. Join us on a remarkable adventure and discover the wonders of the world with confidence.
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
          </div>

          <div className="footerDiv flex">
            <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer