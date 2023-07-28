import ApiService from "./ApiService";
import UserService from "./UserService";

const ListingService = {
  getAllListings: async function(dispatch, setLoading) {
    try {
      const listingURL = `${process.env.REACT_APP_API_URL}/api/admin/listings/`
      const data = await fetch(listingURL, { 
          method: 'GET',
          headers: ApiService.defaultHttpHeader()
        }
      )
      const dataJson = await data.json()
      if (data.ok) {
        dispatch({ type: 'FETCH_LISTINGS', payload: { data: dataJson }})
        setTimeout(() => {
          setLoading(false)
        }, 500);
      } else {
        UserService.logout()
        window.location.href = '/admin'
      }
    } catch (error) {
      console.log(error);
    }
  },
  submitListing: async function(listing, dispatch) {
    try {
      let method     = 'POST'
      let listingURL = `${process.env.REACT_APP_API_URL}/api/admin/listings/`
      const id       = listing.get('listing[id]')
      
      if (!!id) {
        method     = 'PATCH'
        listingURL = `${listingURL}${id}`
      }

      const data = await fetch(listingURL, {
        method: method,
        headers: {
          Authorization: UserService.getCurrentUserToken(),
        },
        body: listing
      })
      const dataJson = await data.json()
      if (data.ok) {
        if (method === 'PATCH') {
          dispatch({ type: 'UPDATE_LISTING', payload: dataJson })
        } else {
          dispatch({ type: 'ADD_LISTING', payload: dataJson })
        }
        return { status: 'ok', responseJson: dataJson }
      } else {
        return { status: 'error', responseJson: dataJson }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default ListingService;
