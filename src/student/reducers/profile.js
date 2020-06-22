import { findIndex } from 'lodash'
import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_FAILURE,
  SET_CURRENT_TAB,
  FETCH_PROFILE_POST_SUCCESS,
  FETCH_PROFILE_POST_REQUEST,
  FETCH_PROFILE_POST_FAILURE,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  EDIT_POST_REQUEST,
  EDIT_USER_PROFILE_FAILURE,
  EDIT_USER_PROFILE_REQUEST,
  EDIT_USER_PROFILE_SUCCESS,
} from '../constants'

const initialState = {
  isLoading: true,
  error: '',
  profile: {},
  currentTab: '',
  postList: [],
  postListLoading: true,
  postListError: '',
  postEditingLoading: false,
  postEditSlug: '',
}

const deletePostFromList = (postList, postSlug) => {
  let tempArr = postList.slice(0)
  const i = findIndex(tempArr, (item) => item.slug === postSlug)
  tempArr.splice(i, 1)
  return tempArr
}

const modifyPostListWithSlug = (postList, payload) => {
  let tempArr = postList.slice(0)
  const i = findIndex(tempArr, (item) => item.slug === payload.slug)
  tempArr[i] = payload.value
  return tempArr
}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: action.payload,
      }
    case FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.payload,
      }
    case FETCH_PROFILE_POST_REQUEST:
      return {
        ...state,
        postListLoading: true,
      }
    case FETCH_PROFILE_POST_SUCCESS:
      return {
        ...state,
        postListLoading: false,
        postList: action.payload,
      }
    case FETCH_PROFILE_POST_FAILURE:
      return {
        ...state,
        postListLoading: false,
        postListError: action.payload,
      }
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        postList: deletePostFromList(state.postList, action.payload),
      }
    case DELETE_POST_FAILURE:
      return {
        ...state,
      }
    case EDIT_POST_REQUEST:
      return {
        ...state,
        postEditingLoading: true,
        postEditSlug: action.payload,
      }
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        postList: modifyPostListWithSlug(state.postList, action.payload),
      }
    case EDIT_USER_PROFILE_REQUEST:
      return {
        ...state,
      }
    case EDIT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
      }
    case EDIT_USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default profile
