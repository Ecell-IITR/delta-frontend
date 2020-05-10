/* eslint-disable no-case-declarations */
import { find, findIndex, filter } from 'lodash'
import {
  ADD_SKILL_REQUEST,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_FAILURE,
  SEARCH_SKILLS,
  REMOVE_SKILL_REQUEST,
  REMOVE_SKILL_FAILURE,
  REMOVE_SKILL_SUCCESS,
  REMOVE_ALL_SKILLS_REQUEST,
  REMOVE_ALL_SKILLS_SUCCESS,
  REMOVE_ALL_SKILLS_FAILURE,
  FETCH_SKILLS_FAILURE,
  FETCH_SKILLS_REQUEST,
  FETCH_SKILLS_SUCCESS,
  SET_ADDED_SKILLS,
} from '../constants/index'

const initialState = {
  skills: [],
  addedSkills: [],
  renderSearchedSkills: [],
  skillsLoading: false,
  errors: '',
  isSkillLoading: false,
  skillSlug: '',
  removeAllLoading: false,
}

function insertItem(array, checkArray, slug) {
  const toInsertObj = find(checkArray, (item) => item.slug === slug)
  if (toInsertObj) {
    array.push(toInsertObj)
  }
  return array
}

function insertArray(array1, array2) {
  const newArray = array1.concat(array2)
  return newArray
}

function removeItem(array, slug) {
  const i = findIndex(array, (item) => item.slug === slug)
  array.splice(i, 1)
  return array
}

const skill = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SKILLS_REQUEST:
      return {
        ...state,
        skillsLoading: true,
      }
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        skills: action.payload,
        skillsLoading: false,
      }
    case FETCH_SKILLS_FAILURE:
      return {
        ...state,
        skillsLoading: false,
        errors: action.payload,
      }
    case SET_ADDED_SKILLS:
      return {
        ...state,
        addedSkills: action.payload,
      }
    case ADD_SKILL_REQUEST:
      return {
        ...state,
        isSkillLoading: true,
        skillSlug: action.payload,
      }
    case ADD_SKILL_SUCCESS:
      return {
        ...state,
        isSkillLoading: false,
        addedSkills: insertItem(
          state.addedSkills,
          state.skills,
          action.payload,
        ),
        skills: removeItem(state.skills, action.payload),
      }
    case ADD_SKILL_FAILURE:
      return {
        ...state,
        isSkillLoading: false,
        errors: action.payload,
      }
    case REMOVE_SKILL_REQUEST:
      return {
        ...state,
        isSkillLoading: true,
        skillSlug: action.payload,
      }
    case REMOVE_SKILL_SUCCESS:
      return {
        ...state,
        isSkillLoading: false,
        skills: insertItem(state.skills, state.addedSkills, action.payload),
        addedSkills: removeItem(state.addedSkills, action.payload),
      }
    case REMOVE_SKILL_FAILURE:
      return {
        ...state,
        isSkillLoading: false,
        errors: action.payload,
      }
    case SEARCH_SKILLS:
      let tmpSkillsList = []
      if (action.payload === '') {
        tmpSkillsList = []
      } else {
        tmpSkillsList = filter(state.skills, (skillsObj) =>
          skillsObj.name.toLowerCase().includes(action.payload.toLowerCase()),
        )
      }
      return {
        ...state,
        renderSearchedSkills: tmpSkillsList,
      }
    case REMOVE_ALL_SKILLS_REQUEST:
      return {
        ...state,
        removeAllLoading: true,
      }
    case REMOVE_ALL_SKILLS_SUCCESS:
      return {
        ...state,
        removeAllLoading: false,
        skills: insertArray(state.skills, state.addedSkills),
        addedSkills: [],
      }
    case REMOVE_ALL_SKILLS_FAILURE:
      return {
        ...state,
        removeAllLoading: false,
        errors: action.payload,
      }
    default:
      return state
  }
}

export default skill
