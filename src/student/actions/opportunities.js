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
  FETCH_USER_OPPORTUNITIES_REQUEST,
  FETCH_USER_OPPORTUNITIES_SUCCESS,
  FETCH_USER_OPPORTUNITIES_FAILURE,
  SET_OPPORTUNITY_FILTER_TAB,
  BOOKMARK_POST_FAILURE,
  BOOKMARK_POST_SUCCESS,
  APPLY_POST_FAILURE,
  APPLY_POST_REQUEST,
  APPLY_POST_SUCCESS,
} from '../constants'

export const fetchStudentOpportunities = (filtersObj) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_OPPORTUNITIES_REQUEST })
    const opportunitiesURL = addQueryParams('/api/v1/post/', {
      ...filtersObj,
    })
    FetchApi('GET', opportunitiesURL, null, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({
            type: FETCH_USER_OPPORTUNITIES_SUCCESS,
            payload: res.data,
          })
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FETCH_USER_OPPORTUNITIES_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const applyPost = (postSlug, value) => {
  return (dispatch) => {
    dispatch({ type: APPLY_POST_REQUEST, payload: postSlug })
    const applyPostURL = '/api/v1/post/apply/' + postSlug + '/'
    FetchApi('POST', applyPostURL, null, getToken(TOKEN_TYPE))
      .then(() => {
        dispatch({
          type: APPLY_POST_SUCCESS,
          payload: {
            slug: postSlug,
            value,
          },
        })
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: APPLY_POST_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const bookmarkPost = (postSlug, value) => {
  return (dispatch) => {
    const bookmarkURL = '/api/v1/post/bookmark/' + postSlug + '/'
    const body = {
      keyword: value ? 'star' : 'unstar',
    }
    FetchApi('POST', bookmarkURL, body, getToken(TOKEN_TYPE))
      .then(() => {
        dispatch({
          type: BOOKMARK_POST_SUCCESS,
          payload: {
            slug: postSlug,
            value,
          },
        })
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: BOOKMARK_POST_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const setOpportunityFilterTab = (value) => {
  return {
    type: SET_OPPORTUNITY_FILTER_TAB,
    payload: value,
  }
}
