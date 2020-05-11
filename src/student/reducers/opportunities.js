import {
  FETCH_USER_OPPORTUNITIES_FAILURE,
  FETCH_USER_OPPORTUNITIES_REQUEST,
  FETCH_USER_OPPORTUNITIES_SUCCESS,
} from '../constants/index'

const initialState = {
  isLoading: true,
  opportunitiesList: [],
  error: '',
  filtersApplied: [],
  skills: [],
  skillsLoading: false,
  locations: [],
  locationsLoading: false
}

const opportunitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_OPPORTUNITIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_USER_OPPORTUNITIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        opportunitiesList: action.payload,
      }
    case FETCH_USER_OPPORTUNITIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default opportunitiesReducer
