import {
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from '../constants/index'

const initialState = {
  isregistering: false,
}

const register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isregistering: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isregistering: false,
        userProfile: action.payload,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isregistering: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default register
