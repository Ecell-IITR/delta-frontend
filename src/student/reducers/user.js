import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  UPLOAD_USER_IMAGE_FAILURE,
  UPLOAD_USER_IMAGE_REQUEST,
  UPLOAD_USER_IMAGE_SUCCESS,
} from '../constants'

const initialState = {
  isLoading: true,
  errors: '',
  user: {},
  profileImageLoading: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_USER_IMAGE_REQUEST:
      return {
        ...state,
        profileImageLoading: true
      }
    case UPLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        profileImageLoading: false,
        user: action.payload
      }
    case UPLOAD_USER_IMAGE_FAILURE:
      return {
        ...state,
        profileImageLoading: false,
        error: action.payload,
      }
    case FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      }
    case FETCH_USER_FAILURE:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      return state
  }
}

export default user
