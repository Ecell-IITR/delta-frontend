/* eslint-disable no-case-declarations */
import { find, findIndex, filter } from 'lodash'
import {
  SHOW_SKILLS,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_FAILURE,
  SEARCH_SKILLS,
  REMOVE_SKILL_FAILURE,
  REMOVE_SKILL_SUCCESS,
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
}

function insertItem(array, slug) {
  const toInsertObj = find(array, (item) => item.slug === slug)
  array.push(toInsertObj)
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
    case SHOW_SKILLS:
      return {
        ...state,
      }
    case ADD_SKILL_SUCCESS:
      return {
        ...state,
        skills: removeItem(state.skills, action.payload),
        addedSkills: insertItem(state.addedSkills, action.payload),
      }
    case ADD_SKILL_FAILURE:
      return {
        ...state,
        errors: action.payload,
      }
    case REMOVE_SKILL_SUCCESS:
      return {
        ...state,
        skills: insertItem(state.skills, action.payload),
        addedSkills: removeItem(state.addedSkills, action.payload),
      }
    case REMOVE_SKILL_FAILURE:
      return {
        ...state,
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
    case REMOVE_ALL_SKILLS_SUCCESS:
      return {
        ...state,
        skills: insertArray(state.skills, state.addedSkills),
        addedSkills: [],
      }
    case REMOVE_ALL_SKILLS_FAILURE:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      return state
  }
}

export default skill
