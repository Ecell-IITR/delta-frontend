import { notify } from 'react-notify-toast'
import FetchApi from 'utils/FetchAPI'
import { getToken } from 'utils/tokenFunc'
import { getErrorMsg } from 'utils/getErrorMsg'
import {
  TOKEN_TYPE,
  NOTIF_ERROR_TYPE,
  NOTIF_MID_RANGE_TIMEOUT,
} from 'globalConstants'
import {
  SET_CREATE_POST_TAB,
  EDIT_POST_SUCCESS,
  EDIT_POST_REQUEST,
  EDIT_POST_FAILURE,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
} from '../constants'

export const editPost = (postSlug, body, callback) => {
  return (dispatch) => {
    dispatch({ type: EDIT_POST_REQUEST, payload: postSlug })
    const editUrl = '/api/v1/post/' + postSlug + '/'
    FetchApi('PUT', editUrl, body, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({
            type: EDIT_POST_SUCCESS,
            payload: {
              slug: postSlug,
              value: res.data,
            },
          })
          callback('success')
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: EDIT_POST_FAILURE,
          error: errorMsg,
        })
        callback('error')
      })
  }
}

export const createPost = (body, callback) => {
  return (dispatch) => {
    dispatch({ type: CREATE_POST_REQUEST })
    console.log(body)
    FetchApi('POST', '/api/v1/post/create/', body, getToken(TOKEN_TYPE))
      .then((res) => {
        dispatch({
          type: CREATE_POST_SUCCESS,
        })
        callback(res.status)
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: CREATE_POST_FAILURE,
          error: errorMsg,
        })
        callback('error')
      })
  }
}

export const setCreatePostTab = (value) => {
  return {
    type: SET_CREATE_POST_TAB,
    payload: value,
  }
}
