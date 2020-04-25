import {
  CREATE_POST_FAILURE,
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
} from '../constants/index'

const initialState = {
  data: {
    jobPosition: '',
    typeOfWork: '',
    workDescription: '',
    durationOfIntern: '',
    stipend: '',
    requiredSkills: '',
    postExpiryDate: '',
  },
}

const createPostInternshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_FAILURE:
      return action.hasErrored

    case CREATE_POST_LOADING:
      return action.isLoading

    case CREATE_POST_SUCCESS:
      return {
        ...state,
        data: {
          jobPosition: action.payload.jobPosition,
          typeOfWork: action.payload.typeOfWork,
          workDescription: action.payload.workDescription,
          durationOfIntern: action.payload.durationOfIntern,
          stipend: action.payload.stipend,
          requiredSkills: action.payload.requiredSkills,
          postExpiryDate: action.payload.postExpiryDate,
        },
      }

    default:
      return state
  }
}

export default createPostInternshipReducer
