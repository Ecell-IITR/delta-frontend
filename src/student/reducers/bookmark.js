import {
    BOOKMARK_FAILURE,
    BOOKMARK_REQUEST,
    BOOKMARK_SUCCESS,
  } from '../constants/index'
  
  const initialState = {
    isLoading: false,
  }
  
  const bookmark = (state = initialState, action) => {
    switch (action.type) {
      case BOOKMARK_REQUEST:
        return {
          ...state,
          isLoading: true,
        }
      case BOOKMARK_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isBookmarked: !isBookmarked,
        }
      case BOOKMARK_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }
  
  export default bookmark
  