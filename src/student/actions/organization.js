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
} from '../constants'


export const fetchOrganizationsList = (filterValue) => {
  return (dispatch) => {
    dispatch({ type: FETCH_ORGANIZATIONS_LIST_REQUEST })
    const organizationListURL = filterValue === 'all' ? '/api/v1/organization-list/?list_type=all' : '/api/v1/following-list/'
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