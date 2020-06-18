import { notify } from 'react-notify-toast'
import FetchApi from 'utils/FetchAPI'
import { getToken } from 'utils/tokenFunc'
import { getErrorMsg } from 'utils/getErrorMsg'
import { addQueryParams } from 'utils/queryParams'
import {
  TOKEN_TYPE,
  NOTIF_ERROR_TYPE,
  NOTIF_MID_RANGE_TIMEOUT,
} from 'globalConstants'
import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  SET_CURRENT_TAB,
  FETCH_PROFILE_POST_FAILURE,
  FETCH_PROFILE_POST_REQUEST,
  FETCH_PROFILE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
} from '../constants/index'

export const fetchStudentProfile = (profileType) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_PROFILE_REQUEST })
    const profileTypeURL = addQueryParams('/api/v1/profile/', {
      type: profileType,
    })
    FetchApi('GET', profileTypeURL, null, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FETCH_USER_PROFILE_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const fetchStudentPost = (filtersObj) => {
  return (dispatch) => {
    dispatch({ type: FETCH_PROFILE_POST_REQUEST })
    const profilePostURL = addQueryParams('/api/v1/post/', {
      ...filtersObj,
    })
    FetchApi('GET', profilePostURL, null, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({
            type: FETCH_PROFILE_POST_SUCCESS,
            payload: res.data,
          })
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FETCH_PROFILE_POST_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const deleteStudentPost = (postSlug) => {
  return (dispatch) => {
    const deletePostURL = '/api/v1/post/' + postSlug
    FetchApi('DELETE', deletePostURL, '', getToken(TOKEN_TYPE))
      .then((res) => {
        dispatch({
          type: DELETE_POST_SUCCESS,
          payload: postSlug,
        })
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: DELETE_POST_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const setCurrentTab = (value) => {
  return {
    type: SET_CURRENT_TAB,
    payload: value,
  }
}
