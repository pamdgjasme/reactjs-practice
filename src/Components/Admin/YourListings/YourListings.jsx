import React, { useReducer } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import listingData from '../../listingData'
import './YourListings.css'
import Listing from './Listing/Listing'
import { yourListingsReducer } from './YourListingsReducer'
import { YourListingsContext, YourListingsDispatchContext } from './YourListingsContext'

const YourListings = () => {
  const initialState = { showListingDetails: false, listing: {}, listings: listingData}
  const [state, dispatch] = useReducer(yourListingsReducer, initialState)

  return (
    <>
      <YourListingsContext.Provider value={state}>
        <YourListingsDispatchContext.Provider value={dispatch}>
          <AdminNavbar />
          { !state.showListingDetails &&
            <div className='listingsSection'>
              <h1>Your Listings</h1>
              {
                state.listings.map(listing => {
                  return (
                    <div 
                      className='listingContent'
                      key={listing.id}
                      onClick={event => {
                        dispatch({ type: 'GO_TO_LISTING', payload: { data: listing } })
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
          { state.showListingDetails && <Listing listing={state.listing} showListingDetails={state.showListingDetails} />}
        </YourListingsDispatchContext.Provider>
      </YourListingsContext.Provider>
    </>
  )
}

export default YourListings