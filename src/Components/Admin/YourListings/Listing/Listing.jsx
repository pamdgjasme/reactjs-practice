import React from 'react'
import './Listing.css'
import { IoIosArrowRoundBack } from 'react-icons/io'

function Listing({ listing, setShowListingDetails, setListing }) {
  const {imgSrc, location, grade, fees, destTitle, description} = listing
  return (
    <div className="listingFormBlock">
      <form id="listingForm">
        <h5 
          onClick={event => {
            setListing({})
            setShowListingDetails(false)
          }
        }><IoIosArrowRoundBack className='icon'/>Back to Listings</h5>
        <h2>Your Listing</h2>
        <div className="imgDiv">
          <img src={imgSrc} alt={destTitle}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="destTitle">Listing Title</label>
          <input type="text" id="destTitle" defaultValue={destTitle}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" defaultValue={location}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="grade">Grade</label>
          <input type="text" id="grade" defaultValue={grade}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="fees">Fees</label>
          <input type="text" id="fees" defaultValue={fees}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="fees">Description</label>
          <textarea type="text" id="description" defaultValue={description}/>
        </div>

        <div className="btnDiv">
          <button type='submit' className='btn flex'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Listing