import { findIndex } from 'lodash'
import {
  FETCH_ORGANIZATIONS_LIST_REQUEST,
  FETCH_ORGANIZATIONS_LIST_SUCCESS,
  FETCH_ORGANIZATIONS_LIST_FAILURE,
  FOLLOW_UNFOLLOW_USER_FAILURE,
  FOLLOW_UNFOLLOW_USER_SUCCESS
} from '../constants'

const initialState = {
  error: '',
  organizationsList: [],
  organizationsListLoading: false,
  organizationsListPagination: {
    count: 0,
    perPage: 10,
    current: 0,
  }
}

export const modifyOrganizationWithUsername = (orgList, payload) => {
  const i = findIndex(orgList, (item) => item.person.username === payload.username)
  orgList[i]['isFollow'] = payload.value
  if (payload.value) {
    orgList[i]['followersCount'] += 1;
  }
  else {
    orgList[i]['followersCount'] -= 1;
  }
  return orgList
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
        organizationsList: Array.isArray(action.payload) ? action.payload : action.payload.results,
      }
    case FETCH_ORGANIZATIONS_LIST_FAILURE:
      return {
        ...state,
        organizationsListLoading: false,
        error: action.payload,
      }
    case FOLLOW_UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        organizationsList: modifyOrganizationWithUsername(state.organizationsList, action.payload)
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
