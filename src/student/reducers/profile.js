import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  SET_CURRENT_TAB
} from '../constants/index'

const initialState = {
  isLoading: false,
  error: '',
  profile: {},
  currentTab: 'post'
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
      }
    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.payload
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
