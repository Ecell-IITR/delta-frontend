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
  FETCH_SKILLS_REQUEST,
  FETCH_SKILLS_FAILURE,
  FETCH_SKILLS_SUCCESS,
  SET_ADDED_SKILLS,
} from '../constants/index'

export const fetchSkills = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SKILLS_REQUEST })
    FetchApi('GET', '/api/v1/utilities/skills', null, getToken(TOKEN_TYPE))
      .then((res) => {
        if (res.data) {
          dispatch({ type: FETCH_SKILLS_SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FETCH_SKILLS_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const setAddedSkills = (studentSkills) => {
  return {
    type: SET_ADDED_SKILLS,
    payload: studentSkills,
  }
}
