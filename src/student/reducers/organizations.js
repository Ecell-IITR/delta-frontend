import { findIndex } from 'lodash'
import {
  FETCH_ORGANIZATIONS_LIST_REQUEST,
  FETCH_ORGANIZATIONS_LIST_SUCCESS,
  FETCH_ORGANIZATIONS_LIST_FAILURE,
  FOLLOW_UNFOLLOW_USER_FAILURE,
  FOLLOW_UNFOLLOW_USER_SUCCESS,
} from '../constants'

const initialState = {
  error: '',
  organizationsList: [],
  organizationsListLoading: false,
  organizationsListPagination: {
    count: 0,
    perPage: 10,
    current: 0,
  },
}

const organizationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATIONS_LIST_REQUEST:
      return {
        ...state,
        organizationsListLoading: true,
      }
    case FETCH_ORGANIZATIONS_LIST_SUCCESS:
      return {
        ...state,
        organizationsListLoading: false,
        organizationsList: Array.isArray(action.payload)
          ? action.payload
          : action.payload.results,
      }
    case FETCH_ORGANIZATIONS_LIST_FAILURE:
      return {
        ...state,
        organizationsListLoading: false,
        error: action.payload,
      }
    case FOLLOW_UNFOLLOW_USER_SUCCESS:
      let tempArr = state.organizationsList.slice(0)
      const i = findIndex(
        tempArr,
        (item) => item.person.username === action.payload.username,
      )
      tempArr[i]['isFollow'] = action.payload.value
      if (action.payload.value) {
        tempArr[i]['followersCount'] += 1
      } else {
        tempArr[i]['followersCount'] -= 1
      }
      return {
        ...state,
        organizationsList: tempArr,
      }
    case FOLLOW_UNFOLLOW_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default organizationsReducer
