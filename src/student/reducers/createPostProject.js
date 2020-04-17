import {
  CREATE_POST_FAILURE,
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
} from '../constants/index'

const initialState = {
  data: {
    title: '',
    stipend: '',
    work_description: '',
    project_file: null,
    approx_duration: '',
    required_skills: [],
    post_exipry_date: '',
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
        data: {},
      }

    default:
      return state
  }
}

export default createPostProjectReducer
