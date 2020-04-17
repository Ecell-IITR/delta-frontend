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
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
} from '../constants/index'

export const fetchStudentProfile = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_PROFILE_REQUEST })
    FetchApi('GET', '/api/v1/profile/', null, getToken(TOKEN_TYPE))
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
