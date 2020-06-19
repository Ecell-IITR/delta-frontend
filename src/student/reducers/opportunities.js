/* eslint-disable no-param-reassign */
import { findIndex } from 'lodash'
import {
  FETCH_USER_OPPORTUNITIES_FAILURE,
  FETCH_USER_OPPORTUNITIES_REQUEST,
  FETCH_USER_OPPORTUNITIES_SUCCESS,
  SET_OPPORTUNITY_FILTER_TAB,
  BOOKMARK_POST_SUCCESS,
  BOOKMARK_POST_FAILURE,
  APPLY_POST_FAILURE,
  APPLY_POST_SUCCESS,
  APPLY_POST_REQUEST,
} from '../constants'

const initialState = {
  isLoading: true,
  opportunitiesList: [],
  error: '',
  isAppliedLoading: false,
  appliedLoadingSlug: '',
  currentFilterTab: '',
}

export const modifyPostWithSlug = (postList, payload, key) => {
  let tempArr = postList.slice(0)
  const i = findIndex(tempArr, (item) => item.slug === payload.slug)
  tempArr[i][key] = payload.value
  return tempArr
}

const opportunitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_OPPORTUNITIES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_USER_OPPORTUNITIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        opportunitiesList: action.payload,
      }
    case FETCH_USER_OPPORTUNITIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case SET_OPPORTUNITY_FILTER_TAB:
      return {
        ...state,
        currentFilterTab: action.payload,
      }
    case APPLY_POST_REQUEST:
      return {
        ...state,
        isAppliedLoading: true,
        appliedLoadingSlug: action.payload,
      }
    case APPLY_POST_SUCCESS:
      return {
        ...state,
        isAppliedLoading: false,
        opportunitiesList: modifyPostWithSlug(
          state.opportunitiesList,
          action.payload,
          'isApplied',
        ),
      }
    case APPLY_POST_FAILURE:
      return {
        ...state,
        isAppliedLoading: false,
      }
    case BOOKMARK_POST_SUCCESS:
      return {
        ...state,
        opportunitiesList: modifyPostWithSlug(
          state.opportunitiesList,
          action.payload,
          'isBookmark',
        ),
      }
    case BOOKMARK_POST_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default opportunitiesReducer
