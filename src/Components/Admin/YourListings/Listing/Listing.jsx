import React, { useContext } from 'react'
import ListingService from '../../../../Services/ListingService'
import IsLoadingShared from '../../../../Shared/IsLoadingShared'
import imgPlaceholder from '../../../../Assets/image-placeholder.png'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { YourListingsContext, YourListingsDispatchContext } from '../YourListingsContext'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './Listing.css'

function Listing({setLoading}) {
  const state    = useContext(YourListingsContext);
  const dispatch = useContext(YourListingsDispatchContext);
  const { register, handleSubmit, formState: { _errors } } = useForm()

  const formSubmit = async (formValues) => {
    setLoading(true)
    const formData = new FormData()
    const post = { ...formValues, image: formValues.image[0] }
    formData.append('listing[listing_photos_attributes][0][image]', post.image)
    formData.append('listing[location]', post.location)
    formData.append('listing[grade]', post.grade)
    formData.append('listing[fees]', post.fees)
    formData.append('listing[name]', post.name)
    formData.append('listing[description]', post.description)
    formData.append('listing[id]', state.listing.id)

    const data = await ListingService.submitListing(formData, dispatch)
    if (data.status === 'ok') {
      setTimeout(() => {
        notify('Successfully saved!')
        setLoading(false)
      }, 500);
    } else {
      notify(data.dataJson?.error, 'error')
    }
  }

  const notify  = (message, type = 'default') => {
    const options = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light"
    }
    
    if (type === 'error') {
      toast.error(message, options)
    } else {
      toast.success(message, options)
    }
  }

  const photoURL = () => {
    let image = state.listing.photos[0]['url']

    if (['', null].includes(image)) return imgPlaceholder

    return process.env.NODE_ENV === 'development' ? `${process.env.REACT_APP_ASSET_URL}${image}` : image
  }

  return ( 
    <div className="listingFormBlock">
      <ToastContainer />
      <form id="listingForm" onSubmit={handleSubmit(formSubmit)}>
        <h5 
          onClick={event => {
            dispatch({ type: 'BACK_TO_LISTINGS' })
          }
        }><IoIosArrowRoundBack className='icon'/>Back to Listings</h5>
        <h2>Your Listing</h2>
        <div className="imgDiv">
          <img id='listingImg' src={ photoURL() } alt={state.listing.name}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="image">Upload photo</label>
          <input type="file" id="image" {...register('image')}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="name">Listing Title</label>
          <input type="text" id="name" defaultValue={state.listing.name} {...register('name')}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" defaultValue={state.listing.location} {...register('location')}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="grade">Grade</label>
          <input type="text" id="grade" defaultValue={state.listing.grade} {...register('grade')}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="fees">Fees</label>
          <input type="text" id="fees" defaultValue={state.listing.fees} {...register('fees')}/>
        </div>
        <div className="inputGroup">
          <label htmlFor="fees">Description</label>
          <textarea type="text" id="description" defaultValue={state.listing.description} {...register('description')}/>
        </div>

        <div className="btnDiv">
          <button type='submit' className='btn flex'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default IsLoadingShared(Listing, 'Saving..', false)
