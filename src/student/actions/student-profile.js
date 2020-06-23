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
  EDIT_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_SUCCESS,
  EDIT_USER_PROFILE_FAILURE,
  UPLOAD_USER_IMAGE_FAILURE,
  UPLOAD_USER_IMAGE_REQUEST,
  UPLOAD_USER_IMAGE_SUCCESS,
} from '../constants'

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

export const editStudentProfile = (body, callback) => {
  return (dispatch) => {
    dispatch({ type: EDIT_USER_PROFILE_REQUEST })
    FetchApi('PUT', '/api/v1/profile/', body, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({ type: EDIT_USER_PROFILE_SUCCESS, payload: res.data })
          callback('success')
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: EDIT_USER_PROFILE_FAILURE,
          error: errorMsg,
        })
        callback('error')
      })
  }
}

export const avatarUpload = (image, callback) => {
  return (dispatch) => {
    dispatch({ type: UPLOAD_USER_IMAGE_REQUEST })
    const data = new FormData()
    data.append('profile_image', image, 'profile_picture.jpg')
    FetchApi('POST', '/api/v1/avatar_upload/', data, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({
            type: UPLOAD_USER_IMAGE_SUCCESS,
            payload: res.data,
          })
        }
        callback(res.status)
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: UPLOAD_USER_IMAGE_FAILURE,
          error: errorMsg,
        })
        if (error.response) {
          callback(error.response.status)
        } else {
          callback('error')
        }
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
      .then(() => {
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
