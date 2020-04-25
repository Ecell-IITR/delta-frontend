import {
  SHOW_SKILLS,
  ADD_SKILL,
  HANDLE_SKILLS,
  REMOVE_SKILL,
  REMOVE_ALL,
  FETCH_SKILLS_FAILURE,
  FETCH_SKILLS_REQUEST,
  FETCH_SKILLS_SUCCESS,
  SET_ADDED_SKILLS,
} from '../constants/index'

const initialState = {
  skills: [],
  addedSkills: [],
  skillsLoading: true,
  errors: '',
}

function insertItem(array, action) {
  const newArray = array.slice()
  newArray.unshift(action.skill)
  return newArray
}
function insertArray(array1, array2) {
  const newArray = array1.concat(array2)
  return newArray
}
function removeItem(array, action) {
  const newArray = array.slice()
  const i = newArray.indexOf(action.skill)
  newArray.splice(i, 1)
  return newArray
}
const skill = (state = initialState, action) => {
  const newState = state
  const newArray1 = state.skills
  const newArray2 = state.addedSkills
  switch (action.type) {
    case FETCH_SKILLS_REQUEST:
      return {
        ...state,
        skillsLoading: true,
      }
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        skillsLoading: false,
        skills: action.payload,
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
    case ADD_SKILL:
      return {
        ...newState,
        skills: removeItem(newArray1, action),
        addedSkills: insertItem(newArray2, action),
      }

    case REMOVE_SKILL:
      return {
        ...newState,
        skills: insertItem(newArray1, action),
        addedSkills: removeItem(newArray2, action),
      }
    case HANDLE_SKILLS:
      return {
        ...newState,
        skills: action.newArray,
      }
    case REMOVE_ALL:
      return {
        ...newState,
        skills: insertArray(newArray1, newArray2),
        addedSkills: [],
      }

    default:
      return {
        ...state,
      }
  }
}

export default skill
