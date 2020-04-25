import {
  CREATE_POST_FAILURE,
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
} from '../constants/index'

const initialState = {
  data: {
    title: '',
    stipend: '',
    workDescription: '',
    projectFile: null,
    approxDuration: '',
    requiredSkills: [],
    postExipryDate: '',
  },
}

const createPostProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_FAILURE:
      return action.hasErrored

    case CREATE_POST_LOADING:
      return action.isLoading

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        data: {
          title: action.payload.title,
          stipend: action.payload.stipend,
          workDescription: action.payload.workDescription,
          projectFile: action.payload.projectFile,
          approxDuration: action.payload.approxDuration,
          requiredSkills: action.payload.requiredSkills,
          postExipryDate: action.payload.postExipryDate,
        },
      }

    default:
      return state
  }
}

export default createPostProjectReducer
