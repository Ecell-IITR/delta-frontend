import { SET_CREATE_POST_TAB } from '../constants'

export const setCreatePostTab = (value) => {
  return {
    type: SET_CREATE_POST_TAB,
    payload: value,
  }
}
