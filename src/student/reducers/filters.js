import {
  SET_OPPORTUNITY_FILTER,
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
} from '../constants'

const initialState = {
  filtersApplied: {
    duration: [0, 75],
    stipend: [0, 8000],
    skill_slug: [],
    location: '',
    duration_unit: 1,
  },
  locations: [],
  locationsLoading: false,
}

export const handleFilters = (filtersApplied, payload) => {
  return Object.assign(filtersApplied, payload)
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
    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        locationsLoading: false,
        error: action.payload,
      }
    case SET_OPPORTUNITY_FILTER:
      return {
        ...state,
        filtersApplied: handleFilters(state.filtersApplied, action.payload),
      }
    default:
      return state
  }
}

export default filtersReducer
