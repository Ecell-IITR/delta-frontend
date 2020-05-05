import {
    POST_FETCH_LOADING,
    POST_FETCH_SUCCESS,
    POST_FETCH_FAILURE,
  } from '../constants/index'
  
  const initialState = {
    isLoading: false
  }
  
  const fetchpost = (state = initialState, action) => {
    switch (action.type) {
      case POST_FETCH_LOADING:
        return {
          ...state,
          isLoading: true
        }
      case POST_FETCH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          payload: action.post
        }
      case POST_FETCH_FAILURE:
        return {
          ...state,
          isLoading: false,
          error
        }
      default:
        return state
    }
  }
  
  export default fetchpost
  