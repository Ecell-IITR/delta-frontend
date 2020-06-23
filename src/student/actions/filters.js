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
  FETCH_LOCATIONS_FAILURE,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_REQUEST,
  SET_OPPORTUNITY_FILTER,
  FETCH_TAGS_FAILURE,
  FETCH_TAGS_REQUEST,
  FETCH_TAGS_SUCCESS,
} from '../constants'

export const fetchLocations = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_LOCATIONS_REQUEST })
    FetchApi(
      'GET',
      '/api/v1/utilities/locations_list/',
      null,
      getToken(TOKEN_TYPE),
    )
      .then((res) => {
        if (res.data) {
          dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FETCH_LOCATIONS_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const fetchTags = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TAGS_REQUEST })
    FetchApi('GET', '/api/v1/utilities/tags_list/', null, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({ type: FETCH_TAGS_SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FETCH_TAGS_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const setOpportunityFilter = (filter) => {
  return {
    type: SET_OPPORTUNITY_FILTER,
    payload: filter,
  }
}
