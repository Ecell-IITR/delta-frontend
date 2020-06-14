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

export const applyPost = (postSlug, callback) => {
  return () => {
    const applyPostURL = '/api/v1/post/apply/' + postSlug + '/'
    FetchApi('POST', applyPostURL, null, getToken(TOKEN_TYPE))
      .then(() => callback('success'))
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        callback('error', errorMsg)
      })
  }
}

export const setOpportunityFilterTab = (value) => {
  return {
    type: SET_OPPORTUNITY_FILTER_TAB,
    payload: value,
  }
}
