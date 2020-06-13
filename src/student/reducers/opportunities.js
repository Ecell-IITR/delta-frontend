import {
  FETCH_USER_OPPORTUNITIES_FAILURE,
  FETCH_USER_OPPORTUNITIES_REQUEST,
  FETCH_USER_OPPORTUNITIES_SUCCESS,
  SET_OPPORTUNITY_FILTER,
  SET_OPPORTUNITY_FILTER_TAB,
} from '../constants/index'

const initialState = {
  isLoading: true,
  opportunitiesList: [],
  error: '',
  filtersApplied: {
    duration: [0, 3],
    stipend: [0, 8000],
    employeesCount: [0, 500],
  },
  skills: [],
  skillsLoading: false,
  locations: [],
  locationsLoading: false,
  currentFilterTab: '',
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
    case SET_OPPORTUNITY_FILTER:
      return {
        ...state,
        filtersApplied: Object.assign(state.filtersApplied, action.payload),
      }
    case SET_OPPORTUNITY_FILTER_TAB:
      return {
        ...state,
        currentFilterTab: action.payload,
      }
    default:
      return state
  }
}

export default opportunitiesReducer
