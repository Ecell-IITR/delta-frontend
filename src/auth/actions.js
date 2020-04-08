import { notify } from 'react-notify-toast'
import { setToken, logout } from 'utils/tokenFunc'
import { TOKEN_TYPE } from 'globalConstants'
import FetchApi from 'utils/FetchAPI'
import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_REQUEST,
} from './constants'

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
        dispatch({ type: LOGIN_FAILURE, error })
        notify.show('Wrong creadentials!', 'error', 3000)
      })
  }
}

export const logoutAction = (callback) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST })
    logout(TOKEN_TYPE)
    dispatch({ type: LOGOUT_SUCCESS })
    callback()
  }
}
