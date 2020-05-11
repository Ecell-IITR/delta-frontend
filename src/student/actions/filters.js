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
  FETCH_LOCATIONS_REQUEST
} from '../constants'

export const fetchLocations = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_LOCATIONS_REQUEST })
    FetchApi('GET', '/api/v1/utilities/locations_list/', null, getToken(TOKEN_TYPE))
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
