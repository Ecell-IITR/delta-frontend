// import { notify } from 'react-notify-toast'
import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  CREATE_USER_PROFILE_REQUEST,
  CREATE_USER_PROFILE_SUCCESS,
  CREATE_USER_PROFILE_FAILURE,
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_LOADING,
  CREATE_POST_FAILURE,
} from '../constants/index'
import FetchApi from '../../utils/FetchAPI'
import { getToken } from '../../utils/tokenFunc'
import { TOKEN_TYPE } from '../../globalConstants'

export * from './fetch-user'
export * from './fetch-student-profile'

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

// export const showInfo = () => {
//   return (dispatch) => { }
// }

export const register = (username, email, password1, password2) => {
  const data = {
    username,
    email,
    password: password1,
    password2,
  }
  return (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    FetchApi('POST', '/api/v1/auth/register', data, null)
      .then((res) => {
        if (res.data) {
          dispatch({ type: REGISTER_SUCCESS, payload: res.data })
        }
      })
      .catch((error) => {
        dispatch({ type: REGISTER_FAILURE, payload: error })
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

// Searchbar actions

export function itemsHasErrored(bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool,
  }
}

export function itemsIsLoading(bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool,
  }
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    items,
  }
}

export function itemsFetchData() {
  return (dispatch) => {
    dispatch(itemsIsLoading(true))
    FetchApi('GET', '/api/v1/user', null)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(itemsIsLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)))
  }
}

// Searchbar Ends

// ////////////////////////////////////////////////////////////////
// /////////////////// CREATE POST actions/////////////////////////
// ////////////////////////////////////////////////////////////////

export function createPostSuccess(data) {
  return {
    type: CREATE_POST_SUCCESS,
    payload: data,
  }
}

export function createPostLoading(bool) {
  return {
    type: CREATE_POST_LOADING,
    isLoading: bool,
  }
}

export function createPostFailure(bool) {
  return {
    type: CREATE_POST_FAILURE,
    hasErrored: bool,
  }
}

// Internship
export function createPostInternship(post) {
  const data = {
    jobPosition: post.jobPosition,
    typeOfWork: post.typeOfWork,
    workDescription: post.workDescription,
    durationOfIntern: post.durationOfIntern,
    stipend: post.stipend,
    requiredSkills: post.requiredSkills,
    postExpiryDate: post.postExpiryDate,
  }

  return (dispatch) => {
    dispatch(createPostLoading(true))
    FetchApi('POST', '/api/v1/post/', data)
      .then((res) => {
        if (res.data) {
          dispatch(createPostSuccess(data))
        }
      })
      .catch((error) => {
        dispatch(createPostFailure(true))
      })
    dispatch(createPostLoading(false))
  }
}

// Project

export function createPostProject() {
  const data = {
    title,
    stipend,
    workDescription,
    projectFile,
    approxDuration,
    requiredSkills,
    postExpiryDate,
  }
  return (dispatch) => {
    dispatch(createPostLoading(true))
    FetchApi('POST', '/api/v1/post/', data)
      .then((res) => {
        if (res.data) {
          dispatch(createPostSuccess(data))
        }
      })
      .catch((error) => {
        dispatch(createPostFailure(true))
      })
    dispatch(createPostLoading(false))
  }
}

// Competition

export function createPostCompetion() {
  const data = {
    title,
    typeOfCompetition,
    competitionDescription,
    poster,
    dateOfCompetition,
    postExpiryDate,
    link,
    prize,
    skillSet,
  }
  return (dispatch) => {
    dispatch(createPostLoading(true))
    FetchApi('POST', '/api/v1/post/', data)
      .then((res) => {
        if (res.data) {
          dispatch(createPostSuccess(data))
        }
      })
      .catch((error) => {
        dispatch(createPostFailure(true))
      })
    dispatch(createPostLoading(false))
  }
}


//////////////////////////////////////////////////////////////////
///////////////////// Fetch POST actions/////////////////////////
//////////////////////////////////////////////////////////////////


export function postFetchFailure(bool) {
  return {
    type: POST_FETCH_ERRORED,
    hasErrored: bool,
  }
}

export function postFetchLoading(bool) {
  return {
    type: POST_FETCH_LOADING,
    isLoading: bool,
  }
}

export function postFetchSuccess(post) {
  return {
    type: POST_FETCH_SUCCESS,
    post,
  }
}

export function postFetchData() {
  return (dispatch) => {
    dispatch(postFetchLoading(true))
    FetchApi('GET', '/api/v1/post/', null)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(postFetchLoading(false))
        return response
      })
      .then((response) => response.json())
      .then((post) => dispatch(postFetchSuccess(post)))
      .catch(() => dispatch(postFetchFailure(true)))
  }
}
