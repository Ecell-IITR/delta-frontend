import { SET_CREATE_POST_TAB } from '../constants'

const initialState = {
  currentTab: 'internship',
}

const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREATE_POST_TAB:
      return {
        ...state,
        currentTab: action.payload,
      }
    default:
      return state
  }
}

export default createPostReducer
