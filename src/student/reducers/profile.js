import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
} from '../constants/index'

const initialState = {
  isFetching: false,
  error: '',
  profile: {},
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        profile: action.payload,
      }
    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case 'ADD_PROFILE_SKILLS':
      return {
        ...state,
        info: {
          skills: action.payload,
        },
      }
    case 'ADD_PROFILE_SOCIAL_LINKS':
      return {
        ...state,
        info: {
          social_links: action.payload,
        },
      }
    case 'ADD_PROFILE_RESUME_FILE':
      return {
        ...state,
        info: {
          resume_file: action.payload,
        },
      }
    default:
      return state
  }
}

export default profile
