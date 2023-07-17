
export const yourListingsReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_LISTING': {
      return {
        ...state,
        listing: action.payload,
        listings: state.listings.map(listing => {
          return listing.id === action.payload.id ? action.payload : listing
        })
      }
    }
    case 'GO_TO_LISTING': {
      return {
        ...state,
        listing: action.payload.data,
        showListingDetails: true
      }
    } 
    case 'SHOW_LISTING': {
      // WIP
      return {
        ...state
      }
    }
    case 'BACK_TO_LISTINGS': {
      return {
        ...state,
        showListingDetails: false,
        listing: {}
      }
    }
    default:
      return state
  }
}
