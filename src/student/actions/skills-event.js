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
  REMOVE_SKILL_REQUEST,
  REMOVE_SKILL_FAILURE,
  REMOVE_SKILL_SUCCESS,
  ADD_SKILL_REQUEST,
  ADD_SKILL_FAILURE,
  ADD_SKILL_SUCCESS,
  REMOVE_ALL_SKILLS_REQUEST,
  REMOVE_ALL_SKILLS_FAILURE,
  REMOVE_ALL_SKILLS_SUCCESS,
  SEARCH_SKILLS,
} from '../constants/index'

export const fetchSkills = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SKILLS_REQUEST })
    FetchApi('GET', '/api/v1/utilities/skills/', null, getToken(TOKEN_TYPE))
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

export const removeSkill = (slug) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_SKILL_REQUEST,
      payload: slug,
    })
    FetchApi(
      'POST',
      `/api/v1/utilities/skills/remove/${slug}/`,
      null,
      getToken(TOKEN_TYPE),
    )
      .then(() => {
        dispatch({ type: REMOVE_SKILL_SUCCESS, payload: slug })
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: REMOVE_SKILL_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const addSkill = (slug) => {
  return (dispatch) => {
    dispatch({
      type: ADD_SKILL_REQUEST,
      payload: slug,
    })
    FetchApi(
      'POST',
      `/api/v1/utilities/skills/add/${slug}/`,
      null,
      getToken(TOKEN_TYPE),
    )
      .then(() => {
        dispatch({ type: ADD_SKILL_SUCCESS, payload: slug })
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: ADD_SKILL_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const removeAll = () => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ALL_SKILLS_REQUEST,
    })
    FetchApi(
      'POST',
      `/api/v1/utilities/skills/remove-all/`,
      null,
      getToken(TOKEN_TYPE),
    )
      .then(() => {
        dispatch({ type: REMOVE_ALL_SKILLS_SUCCESS })
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: REMOVE_ALL_SKILLS_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const searchSkills = (query) => {
  return {
    type: SEARCH_SKILLS,
    payload: query,
  }
}
