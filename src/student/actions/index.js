// import { notify } from 'react-notify-toast'
import FetchApi from 'utils/FetchAPI'
import { getToken } from 'utils/tokenFunc'
import { TOKEN_TYPE } from 'globalConstants'
import {
  FETCH_ORGANIZATIONS_LIST_REQUEST,
  FETCH_ORGANIZATIONS_LIST_SUCCESS,
  FETCH_ORGANIZATIONS_LIST_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS,
  CREATE_POST_SUCCESS,
  CREATE_POST_LOADING,
  CREATE_POST_FAILURE,
} from '../constants/index'

export * from './fetch-user'
export * from './student-profile'
export * from './skills-event'
export * from './opportunities'
export * from './filters'
export * from './post'
export * from './organization'

const token = getToken(TOKEN_TYPE)

// export const showInfo = () => {
//   return (dispatch) => { }
// }

export const followUser = (slug) => {
  return (dispatch) => {
    dispatch({ type: FOLLOW_USER_REQUEST })
    FetchApi('POST', `/api/v1/action/1/${slug}/`, null, getToken(TOKEN_TYPE))
      .then(() => {
        dispatch({ type: FOLLOW_USER_SUCCESS, payload: slug })
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FOLLOW_USER_FAILURE,
          error: errorMsg,
        })
      })
  }
}

export const unfollowUser = (slug) => {
  return (dispatch) => {
    dispatch({ type: UNFOLLOW_USER_REQUEST })
    FetchApi('POST', `/api/v1/action/2/${slug}/`, null, getToken(TOKEN_TYPE))
      .then(() => {
        dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: slug })
      })
      .catch((error) => {
        const errorMsg = getErrorMsg(error)
        notify.show(errorMsg, NOTIF_ERROR_TYPE, NOTIF_MID_RANGE_TIMEOUT)
        dispatch({
          type: FOLLOW_USER_FAILURE,
          error: errorMsg,
        })
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

// ////////////////////////////////////////////////////////////////
// /////////////////// Fetch POST actions/////////////////////////
// ////////////////////////////////////////////////////////////////

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
