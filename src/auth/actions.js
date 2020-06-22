import { notify } from 'react-notify-toast'
import axios from 'axios'
import { setToken, logout } from 'utils/tokenFunc'
import {
  NOTIF_ERROR_TYPE,
  NOTIF_SUCCESS_TYPE,
  TOKEN_TYPE,
  NOTIF_MID_RANGE_TIMEOUT,
  LOGOUT_SUCCESS_MSG,
} from 'globalConstants'
import FetchApi from 'utils/FetchAPI'
import { getErrorMsg } from 'utils/getErrorMsg'
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
  OAUTH_LOGIN_FAILURE,
  OAUTH_LOGIN_REQUEST,
  OAUTH_LOGIN_SUCCESS,
} from './constants'

export const loginAction = (data, callback) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    FetchApi('POST', '/api/v1/auth/login/', data)
      .then((res) => {
        if (res.data && res.data.token) {
          setToken(TOKEN_TYPE, res.data.token)
          dispatch({ type: LOGIN_SUCCESS })
          callback(res.status)
        }
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAILURE,
          error: error.response && error.response.statusText,
        })
        notify.show(
          getErrorMsg(error),
          NOTIF_ERROR_TYPE,
          NOTIF_MID_RANGE_TIMEOUT,
        )
        callback(err.response.status)
      })
  }
}

export const logoutAction = (callback) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST })
    logout(TOKEN_TYPE)
    dispatch({ type: LOGOUT_SUCCESS })
    notify.show(LOGOUT_SUCCESS_MSG, NOTIF_SUCCESS_TYPE, NOTIF_MID_RANGE_TIMEOUT)
    callback()
  }
}

export const channeliOAuthLogin = (code, callback) => {
  return (dispatch) => {
    dispatch({ type: OAUTH_LOGIN_REQUEST })
    FetchApi('POST', '/api/v1/oauth/channeli/', { code })
      .then((res) => {
        if (res.data && res.data.token) {
          setToken(TOKEN_TYPE, res.data.token)
          dispatch({ type: OAUTH_LOGIN_SUCCESS })
          callback(res.status)
        }
      })
      .catch((error) => {
        dispatch({
          type: OAUTH_LOGIN_FAILURE,
          error: error.response && error.response.statusText,
        })
        notify.show(
          getErrorMsg(error),
          NOTIF_ERROR_TYPE,
          NOTIF_MID_RANGE_TIMEOUT,
        )
      })
  }
}
