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
import { addQueryParams } from 'utils/queryParams'

export const loginAction = (data, callback) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    FetchApi('POST', '/api/v1/auth/login/', data)
      .then((res) => {
        if (res.data && res.data.token) {
          setToken(TOKEN_TYPE, res.data.token)
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
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

export const channeliOAuthLogin = (code) => {
  return (dispatch) => {
    dispatch({ type: OAUTH_LOGIN_REQUEST })
    // const url = addQueryParams()
    const params = {
      client_id: process.env.REACT_APP_DELTA_CLIENT_ID,
      client_secret: process.env.REACT_APP_DELTA_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_url: 'http://localhost:3000/oauth/channeli/',
      code: code,
    }
    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
      'cache-control': 'no-cache',
    }
    axios({
      method: 'POST',
      url: 'https://internet.channeli.in/open_auth/token/',
      body: params,
      headers,
      responseType: 'json',
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
