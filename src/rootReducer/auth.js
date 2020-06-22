import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SET_USER_AUTH,
  OAUTH_LOGIN_FAILURE,
  OAUTH_LOGIN_SUCCESS,
  OAUTH_LOGIN_REQUEST
} from '../auth/constants'

const initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  error: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.payload,
      }
    case SET_USER_AUTH:
      return {
        ...state,
        isAuthenticated: true,
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      }
    case LOGOUT_SUCCESS:
      return {
        isAuthenticating: false,
        isAuthenticated: false,
      }
    case OAUTH_LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
      }
    case OAUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        isAuthenticated: true,
      }
    case OAUTH_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
