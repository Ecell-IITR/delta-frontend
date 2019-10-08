import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE
} from '../constants/index'
const initialState = {
  info: {
    branch: '',
    year: '',
    course: '',
    roll: '',
    bio: '',
    profile_image: '',
    interest: '',
    skills: [],
    social_links: ''
  },
  isfetching: false,
  error: ''
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        isfetching: true
      }
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        info: {
          branch: action.payload.branch,
          year: action.payload.year,
          course: action.payload.course,
          roll: action.payload.enrollment_number,
          bio: action.payload.bio,
          profile_image: action.payload.profile_image,
          interest: action.payload.interest,
          skills: action.payload.skills,
          social_links: action.payload.social_links
        },
        isfetching: false
      }
    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        isfetching: false,
        error: action.payload
      }
    case 'ADD_PROFILE_SKILLS':
      return {
        ...state,
        info: {
          skills: action.payload
        }
      }
    case 'ADD_PROFILE_SOCIAL_LINKS':
      return {
        ...state,
        info: {
          social_links: action.payload
        }
      }
    default:
      return state
  }
}

export default profile
