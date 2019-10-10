import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  TOKEN_TYPE,
  CREATE_USER_PROFILE_REQUEST,
  CREATE_USER_PROFILE_SUCCESS,
  CREATE_USER_PROFILE_FAILURE
} from '../constants/index'
import FetchApi from '../../utils/FetchAPI'
import { getToken, setToken, logout } from '../utils.js'

let token = getToken(TOKEN_TYPE)

export const fetchProfile = username => {
  return dispatch => {
    dispatch(request())
    FetchApi('GET', '/api/v1/get/profile/' + username + '/', null, token)
      .then(res => {
        if (res.data) {
          dispatch(success(res.data))
        }
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }
  function request() {
    return { type: FETCH_USER_PROFILE_REQUEST }
  }
  function success(data) {
    return { type: FETCH_USER_PROFILE_SUCCESS, payload: data }
  }
  function failure(error) {
    return { type: FETCH_USER_PROFILE_FAILURE, error }
  }
}

export const createProfile = profile => {
  return dispatch => {
    const data = {
      skills: profile.skills,
      social_links: profile.social_links,
      resume_file: profile.resume_file
    }
    dispatch(request())
    FetchApi('POST', '/api/v1/create/profile/', data, null)
      .then(res => {
        if (res.data) {
          dispatch(success(res.data))
        }
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }
  function request() {
    return { type: CREATE_USER_PROFILE_REQUEST }
  }
  function success(data) {
    return { type: CREATE_USER_PROFILE_SUCCESS, payload: data }
  }
  function failure(error) {
    return { type: CREATE_USER_PROFILE_FAILURE, error }
  }
}

export const fetchUser = callback => {
  return dispatch => {
    dispatch(request())
    FetchApi('GET', '/api/v1/get/user', null, token)
      .then(res => {
        if (res.data) {
          dispatch(success(res.data))
          callback()
        }
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }
  function request() {
    return { type: FETCH_USER_REQUEST }
  }
  function success(data) {
    return { type: FETCH_USER_SUCCESS, payload: data }
  }
  function failure(error) {
    return { type: FETCH_USER_FAILURE, error }
  }
}

export const showInfo = () => {
  return dispatch => {}
}

export const login = (username, password, callback) => {
  return dispatch => {
    const data = {
      email: username,
      password: password
    }
    dispatch(request())
    FetchApi('POST', '/api/v1/auth/login', data)
      .then(res => {
        if (res.data && res.data.token) {
          setToken(TOKEN_TYPE, res.data.token)
          dispatch(success(res.data.token))
          callback('ok')
        }
      })
      .catch(error => {
        dispatch(failure(error))
        callback(error)
        // alert('Wrong credentials')
      })
  }

  function request() {
    return { type: LOGIN_REQUEST }
  }
  function success(data) {
    return { type: LOGIN_SUCCESS, payload: data }
  }
  function failure(error) {
    return { type: LOGIN_FAILURE, error }
  }
}

export const log_out = callback => {
  return dispatch => {
    dispatch(request())
    logout(TOKEN_TYPE)
    dispatch(success())
    callback()
  }

  function request() {
    return { type: LOGOUT_REQUEST }
  }
  function success(data) {
    return { type: LOGOUT_SUCCESS }
  }
}

export const register = (username, email, password1, password2) => {
  const data = {
    username: username,
    email: email,
    password: password1,
    password2: password2
  }
  return dispatch => {
    dispatch(request(data))
    FetchApi('POST', '/api/v1/auth/register', data, null)
      .then(res => {
        if (res.data) {
          dispatch(success(res.data))
          alert('registerd')
        }
      })
      .catch(error => {
        dispatch(failure(error))
      })
  }

  function request() {
    return { type: REGISTER_REQUEST }
  }
  function success(data) {
    return { type: REGISTER_SUCCESS, payload: data }
  }
  function failure(error) {
    return { type: REGISTER_FAILURE, payload: error }
  }
}
export const ShowInfo = () => {
  const action = {
    type: 'RENDER_INFO'
  }

  return action
}

/* Skill component action creators*/
export const showSkills = () => {
  return { type: 'SHOW_SKILLS' }
}
export const removeSkill = (skill, index) => {
  return {
    type: 'REMOVE_SKILL',
    index: index,
    skill: skill
  }
}

export const addSkill = (skill, index) => {
  console.log(skill)
  return {
    type: 'ADD_SKILL',
    index: index,
    skill: skill
  }
}
export const handleSkills = newArray => {
  return {
    type: 'HANDLE_SKILLS',
    newArray: newArray
  }
}
export const removeAll = () => {
  return {
    type: 'REMOVE_ALL'
  }
}

/* ends*/
/* Resume Component actions*/

export const viewResume = () => {
  return dispatch => {
    FetchApi('GET', '/api/v1/get/resume', null, token).then(res => {
      if (res.data) {
        dispatch({ type: 'VIEW_RESUME', payload: res.data })
      }
    })
  }
}
