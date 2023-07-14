import React, { useState } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import listingData from '../../listingData'
import './YourListings.css'
import Listing from './Listing/Listing'

const YourListings = () => {
  const [showListingDetails, setShowListingDetails] = useState(false)
  const [listing, setListing] = useState({})

  return (
    <>
      <AdminNavbar />
      { !showListingDetails &&
        <div className='listingsSection'>
          <h1>Your Listings</h1>
          {
            listingData.map(listing => {
              return (
                <div 
                  className='listingContent'
                  key={listing.id}
                  onClick={event => {
                    setListing(listing);
                    setShowListingDetails(true);
                  }
                }>
                  <div className="imgDiv">
                    <img src={listing.imgSrc} alt={listing.destTitle} />
                  </div>
                  <div className="cardInfo">
                    <div className="titleBlock">
                      <div>{listing.destTitle}</div>
                      <div className='bookingBlock'>
                        {listing.noOfBookings}
                        <span className='times'>&nbsp;times booked!</span>
                      </div>
                    </div>
                    <div className='location'>{listing.location}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      }
      { showListingDetails && <Listing listing={listing} setListing={setListing} setShowListingDetails={setShowListingDetails} />}
    </>
  )
}

export default YourListings