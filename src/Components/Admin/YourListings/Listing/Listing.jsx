import React, { useContext } from 'react'
import './Listing.css'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { YourListingsContext, YourListingsDispatchContext } from '../YourListingsContext'

function Listing() {

  const state    = useContext(YourListingsContext);
  const dispatch = useContext(YourListingsDispatchContext);

  const formSubmit = (event) => {
    event.preventDefault();
    const elements = event.target.elements
    const listingData = {
      location:    elements.location.value,
      grade:       elements.grade.value,
      fees:        elements.fees.value,
      name:        elements.name.value,
      description: elements.description.value,
      imgSrc:      state.listing.imgSrc,
      image:       elements.image.value
    }
    dispatch({ type: 'UPDATE_LISTING', payload: listingData })
  }

  return ( 
    <div className="listingFormBlock">
      <form id="listingForm" onSubmit={formSubmit}>
        <h5 
          onClick={event => {
            dispatch({ type: 'BACK_TO_LISTINGS' })
          }
        }><IoIosArrowRoundBack className='icon'/>Back to Listings</h5>
        <h2>Your Listing</h2>
        <div className="imgDiv">
          <img id='listingImg' src={`${process.env.REACT_APP_API_URL}${state.listing.photos[0]}` || ''} alt={state.listing.name}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="image">Upload photo</label>
          {/* <input type="file" id="image" defaultValue={state.listing.name}/> */}
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Listing Title</label>
          <input type="text" id="name" defaultValue={state.listing.name}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" defaultValue={state.listing.location}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="grade">Grade</label>
          <input type="text" id="grade" defaultValue={state.listing.grade}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="fees">Fees</label>
          <input type="text" id="fees" defaultValue={state.listing.fees}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="fees">Description</label>
          <textarea type="text" id="description" defaultValue={state.listing.description}/>
        </div>

        <div className="btnDiv">
          <button type='submit' className='btn flex'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Listing