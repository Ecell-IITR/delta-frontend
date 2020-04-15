import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  UPLOAD_USER_IMAGE_FAILURE,
  UPLOAD_USER_IMAGE_REQUEST,
  UPLOAD_USER_IMAGE_SUCCESS,
} from '../constants/index'

const initialState = {
  userActions: {
    isUploading: false,
    isFetching: false,
    errors: '',
  },
  userDetails: {},
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_USER_IMAGE_REQUEST:
      return {
        ...state,
        userActions: {
          isUploading: true,
        },
      }
    case UPLOAD_USER_IMAGE_FAILURE:
      return {
        ...state,
        userActions: {
          isUploading: false,
          errors: 'Something went wrong!',
        },
      }
    case UPLOAD_USER_IMAGE_SUCCESS:
      return {
        ...state,
        userActions: {
          isUploading: false,
        },
      }
    case FETCH_USER_REQUEST:
      return {
        ...state,
        userActions: {
          isFetching: true,
        },
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        userActions: {
          isFetching: false,
        },
        userDetails: action.payload,
      }
    case FETCH_USER_FAILURE:
      return {
        ...state,
        userActions: {
          errors: action.payload,
        },
      }
    default:
      return state
  }
}

export default user
