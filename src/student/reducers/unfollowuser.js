import {
  UNFOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
} from '../constants/index'

const initialState = {
  isFetching: false,
  error: '',
  unfollowuser: {},
}

const unfollowuser = (state = initialState, action) => {
  switch (action.type) {
    case UNFOLLOW_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        unfollowuser: action.payload,
      }
    case UNFOLLOW_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default unfollowuser
