import {
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
} from '../constants/index'

const initialState = {
  isFetching: false,
  error: '',
  followuser: {},
}

const followUnfollowUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        followuser: action.payload,
      }
    case FOLLOW_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default followUnfollowUserReducer
