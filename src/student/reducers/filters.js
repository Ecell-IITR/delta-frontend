import {
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE
} from '../constants/index'

const initialState = {
  error: '',
  locations: [],
  locationsLoading: false
}

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_REQUEST:
      return {
        ...state,
        locationsLoading: true,
      }
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        locationsLoading: false,
        locations: action.payload,
      }
    case FETCH_LOCATIONS_FAILURE
      :
      return {
        ...state,
        locationsLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default filtersReducer
