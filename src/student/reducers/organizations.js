import {
  FETCH_ORGANIZATIONS_LIST_REQUEST,
  FETCH_ORGANIZATIONS_LIST_SUCCESS,
  FETCH_ORGANIZATIONS_LIST_FAILURE,
} from '../constants/index'

const initialState = {
  error: '',
  organizationsList: [],
  organizationsListLoading: false,
  organizationsListPagination: {
    count: 0,
    perPage: 10,
    current: 0,
  }
}

const organizationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATIONS_LIST_REQUEST:
      return {
        ...state,
        organizationsListLoading: true,
      }
    case FETCH_ORGANIZATIONS_LIST_SUCCESS:
      return {
        ...state,
        organizationsListLoading: false,
        organizationsList: Array.isArray(action.payload) ? action.payload : action.payload.results,
      }
    case FETCH_ORGANIZATIONS_LIST_FAILURE:
      return {
        ...state,
        organizationsListLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default organizationsReducer
