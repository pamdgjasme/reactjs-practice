import React, { useEffect, useReducer } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import ApiService from '../../../Services/ApiService'
import UserService from '../../../Services/UserService'
import Listing from './Listing/Listing'
import IsLoadingShared from '../../../Shared/IsLoadingShared'
import { yourListingsReducer } from './YourListingsReducer'
import { YourListingsContext, YourListingsDispatchContext } from './YourListingsContext'
import './YourListings.css'

function YourListings({setLoading}) {
  const initialState = { showListingDetails: false, listing: {}, listings: [] }
  const [state, dispatch] = useReducer(yourListingsReducer, initialState)

  const headers = (method = 'GET', data = {}) => {
    return { method: method, headers: ApiService.defaultHttpHeader() };
  }

  useEffect(() => {
    const fetchData = async() => {
      const response     = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/listings/`, headers())
      const responseJson = await response.json()
      if (response.ok) {
        dispatch({ type: 'FETCH_LISTINGS', payload: { data: responseJson }})
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      } else {
        UserService.logout()
        window.location.href = '/admin'
      }
    }
    fetchData()
  }, [setLoading])

  const renderListings = () => {
    return (
      <>
        <AdminNavbar />
        {
          !state.showListingDetails ?
          <div className='listingsSection'>
            <h1>Your Listings</h1>
            {
              state.listings.length && state.listings.map(listing => (
                <div className='listingContent' key={listing.id} onClick={() => goToListingForm(listing)}>
                  <div className="imgDiv">
                    <img src={ process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_ASSET_URL}${listing.photos[0]['url']}` : listing.photos[0]['url']} alt={listing.name} />
                  </div>
                  <div className="cardInfo">
                    <div className="titleBlock">
                      <div>{listing.name}</div>
                      <div className='bookingBlock'>
                        {listing.noOfBookings}
                        <span className='times'>&nbsp;times booked!</span>
                      </div>
                    </div>
                    <div className='location'>{listing.location}</div>
                  </div>
                </div>
              ))
            }
          </div>
          :
          <Listing listing={state.listing} showListingDetails={state.showListingDetails} />
        }
      </>
    )
  }

  const goToListingForm = (listing) => {
    dispatch({ type: 'GO_TO_LISTING', payload: { data: listing } })
  }

  return (
    <>
      <YourListingsContext.Provider value={state}>
        <YourListingsDispatchContext.Provider value={dispatch}>
          { renderListings() }
        </YourListingsDispatchContext.Provider>
      </YourListingsContext.Provider>
    </>
  )
}

export default IsLoadingShared(YourListings, 'Please wait while we gather your listings..')
