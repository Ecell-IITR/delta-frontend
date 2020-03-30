import {
  SHOW_SKILLS,
  ADD_SKILL,
  HANDLE_SKILLS,
  REMOVE_SKILL,
  REMOVE_ALL
} from '../constants/index'

const initialState = {
  skills: [
    'web developer',
    'Competitive coder',
    'blockchain developer',
    'machine learning',
    'designer',
    'deep learning',
    'finance',
    'quant'
  ],
  addedSkills: ['illustrator']
}

function insertItem(array, action) {
  let newArray = array.slice()
  newArray.unshift(action.skill)
  return newArray
}
function insertArray(array1, array2) {
  let newArray = array1.concat(array2)
  return newArray
}
function removeItem(array, action) {
  let newArray = array.slice()
  var i = newArray.indexOf(action.skill)
  newArray.splice(i, 1)
  return newArray
}
const skill = (state = initialState, action) => {
  const newState = state
  let newArray1 = state.skills
  let newArray2 = state.addedSkills
  switch (action.type) {
    case SHOW_SKILLS:
      return {
        ...state
      }

    case ADD_SKILL:
      return Object.assign(
        {},
        {
          ...newState,
          skills: removeItem(newArray1, action),
          addedSkills: insertItem(newArray2, action)
        }
      )

    case REMOVE_SKILL:
      return Object.assign(
        {},
        {
          ...newState,
          skills: insertItem(newArray1, action),
          addedSkills: removeItem(newArray2, action)
        }
      )
    case HANDLE_SKILLS:
      return Object.assign(
        {},
        {
          ...newState,
          skills: action.newArray
        }
      )
    case REMOVE_ALL:
      return Object.assign(
        {},
        {
          ...newState,
          skills: insertArray(newArray1, newArray2),
          addedSkills: []
        }
      )

    default:
      return {
        ...state
      }
  }
}

export default skill
