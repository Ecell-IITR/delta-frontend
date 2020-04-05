import { useToasts } from 'react-toast-notifications'
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
  CREATE_USER_PROFILE_FAILURE,
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS
} from '../constants/index'
import FetchApi from '../../utils/FetchAPI'
import { getToken, setToken, logout } from '../utils.js'

const token = getToken(TOKEN_TYPE)

export const fetchProfile = (username) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_PROFILE_REQUEST })
    FetchApi('GET', '/api/v1/get/profile/' + username + '/', null, token)
      .then((res) => {
        if (res.data) {
          dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_USER_PROFILE_FAILURE, error })
      })
  }
}

export const createProfile = (profile) => {
  return (dispatch) => {
    const data = {
      skills: profile.skills,
      social_links: profile.social_links,
      resume_file: profile.resume_file,
    }
    dispatch({ type: CREATE_USER_PROFILE_REQUEST })
    FetchApi('POST', '/api/v1/create/profile/', data, null)
      .then((res) => {
        if (res.data) {
          dispatch({ type: CREATE_USER_PROFILE_SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        dispatch({ type: CREATE_USER_PROFILE_FAILURE, error })
      })
  }
}

export const fetchUser = (callback) => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST })
    FetchApi('GET', '/api/v1/get/user', null, token)
      .then((res) => {
        if (res.data) {
          dispatch({ type: FETCH_USER_SUCCESS, payload: res.data })
          callback()
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_USER_FAILURE, error })
      })
  }
}

export const showInfo = () => {
  return (dispatch) => {}
}

export const login = (username, password, callback) => {
  return (dispatch) => {
    // const { addToast } = useToasts()
    const data = {
      email: username,
      password,
    }
    dispatch({ type: LOGIN_REQUEST })
    FetchApi('POST', '/api/v1/auth/login/', data)
      .then((res) => {
        if (res.data && res.data.token) {
          setToken(TOKEN_TYPE, res.data.token)
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.token })
          callback('ok')
        }
      })
      .catch((error) => {
        dispatch({ type: LOGIN_FAILURE, error })
        callback(error)
        // addToast(error.message, { appearance: 'error' })
        // addToast('Wrong credentials!!', {
        //   appearance: 'warning',
        //   autoDismiss: false
        // })
      })
  }
}

export const log_out = (callback) => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST })
    logout(TOKEN_TYPE)
    dispatch({ type: LOGOUT_SUCCESS })
    callback()
  }
}

export const register = (username, email, password1, password2) => {
  const data = {
    username,
    email,
    password: password1,
    password2,
  }
  return (dispatch) => {
    const { addToast } = useToasts()
    dispatch({ type: REGISTER_REQUEST })
    FetchApi('POST', '/api/v1/auth/register', data, null)
      .then((res) => {
        if (res.data) {
          dispatch({ type: REGISTER_SUCCESS, payload: res.data })
          addToast('Registered', { appearance: 'success', autoDismiss: true })
        }
      })
      .catch((error) => {
        dispatch({ type: REGISTER_FAILURE, payload: error })
        addToast(error.message, { appearance: 'error' })
      })
  }
}
export const ShowInfo = () => {
  const action = {
    type: 'RENDER_INFO',
  }

  return action
}

/* Skill component action creators */
export const showSkills = () => {
  return { type: 'SHOW_SKILLS' }
}
export const removeSkill = (skill, index) => {
  return {
    type: 'REMOVE_SKILL',
    index,
    skill,
  }
}

export const addSkill = (skill, index) => {
  return {
    type: 'ADD_SKILL',
    index,
    skill,
  }
}
export const handleSkills = (newArray) => {
  return {
    type: 'HANDLE_SKILLS',
    newArray,
  }
}
export const removeAll = () => {
  return {
    type: 'REMOVE_ALL',
  }
}

/* ends */
/* Resume Component actions */

export const viewResume = () => {
  return (dispatch) => {
    FetchApi('GET', '/api/v1/get/resume', null, token).then((res) => {
      if (res.data) {
        dispatch({ type: 'VIEW_RESUME', payload: res.data })
      }
    })
  }
}

//Searchbar actions

export function itemsHasErrored(bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function itemsIsLoading(bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
  };
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    items
  };
}

export function itemsFetchData() {
  return dispatch => {
    dispatch(itemsIsLoading(true));
    FetchApi('GET', '/api/v1/user', null)
      .then((response) => {
        if(!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}

//Searchbar Ends