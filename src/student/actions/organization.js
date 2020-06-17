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
  FETCH_ORGANIZATIONS_LIST_REQUEST,
  FETCH_ORGANIZATIONS_LIST_SUCCESS,
  FETCH_ORGANIZATIONS_LIST_FAILURE,
  FOLLOW_UNFOLLOW_USER_FAILURE,
  FOLLOW_UNFOLLOW_USER_SUCCESS
} from '../constants'


export const fetchOrganizationsList = (filterValue) => {
  return (dispatch) => {
    dispatch({ type: FETCH_ORGANIZATIONS_LIST_REQUEST })
    const organizationListURL = `/api/v1/organization-list/?list_type=${filterValue}`
    FetchApi(
      'GET',
      organizationListURL,
      null,
      getToken(TOKEN_TYPE),
    )
      .then((res) => {
        if (res.data) {
          dispatch({ type: FETCH_ORGANIZATIONS_LIST_SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FETCH_ORGANIZATIONS_LIST_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const followUnfollowUser = (username, value) => {
  return (dispatch) => {
    FetchApi('POST', `/api/v1/action/${value}/${username}/`, null, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({
            type: FOLLOW_UNFOLLOW_USER_SUCCESS,
            payload: {
              username,
              value: value === 1 ? true : false
            }
          })
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FOLLOW_UNFOLLOW_USER_FAILURE,
          error: errorMsg,
        })
      })
  }
}