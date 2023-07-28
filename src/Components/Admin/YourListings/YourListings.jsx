import React, { useEffect, useReducer } from 'react'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import ListingService from '../../../Services/ListingService'
import Listing from './Listing/Listing'
import IsLoadingShared from '../../../Shared/IsLoadingShared'
import { yourListingsReducer } from './YourListingsReducer'
import { YourListingsContext, YourListingsDispatchContext } from './YourListingsContext'
import { IoIosAddCircle } from 'react-icons/io'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import './YourListings.css'

function YourListings({setLoading}) {
  const initialState = { showListingDetails: false, listing: {}, listings: [] }
  const [state, dispatch] = useReducer(yourListingsReducer, initialState)

  const initialListing = () => {
    return(
      {
        id: null,
        location: '',
        grade: '',
        fees: '',
        name: '',
        description: '',
        photos: [{url: null, id: null}]
      }
    )
  }

  useEffect(() => {
    async function fetchData() {
      await ListingService.getAllListings(dispatch, setLoading);
    }
    if (!state.showListingDetails) fetchData()
  }, [state.showListingDetails, setLoading])

  const renderListings = () => {
    return (
      <>
        <AdminNavbar />
        {
          !state.showListingDetails ?
          <div className='listingsSection'>
            <h1>Your Listings
              <IoIosAddCircle
                className='icon'
                onClick={() => {
                  dispatch({ type: 'GO_TO_LISTING', payload: { data: initialListing() } })
                }}
              />
            </h1>
            {
              state.listings.length && state.listings.map(listing => (
                <>
                  {/* <div className="overlayListing" key={`overlay-${listing.id}`}></div> */}
                  <div 
                    className='listingContent'
                    key={listing.id}
                    onClick={() => {
                      dispatch({ type: 'GO_TO_LISTING', payload: { data: listing } })
                    }}
                  >
                    <MdOutlineDeleteOutline className='icon deleteListing' />
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
                </>
              ))
            }
          </div>
          :
          <Listing listing={state.listing} showListingDetails={state.showListingDetails} />
        }
      </>
    )
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
