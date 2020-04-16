import {
    CREATE_POST_FAILURE,
    CREATE_POST_LOADING,
    CREATE_POST_SUCCESS,
  } from '../constants/index'
  
const initialState = {
    data: {
        job_position: '',
        type_of_work: '',
        work_description: '',
        duration_of_intern: '',
        stipend: '',
        required_skills: '',
        post_expiry_date: '',
    }
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
                job_position: action.payload.job_position,
                type_of_work: action.payload.type_of_work,
                work_description: action.payload.work_description,
                duration_of_intern: action.payload.duration_of_intern,
                stipend: action.payload.stipend,
                required_skills: action.payload.required_skills,
                post_expiry_date: action.payload.post_expiry_date
            }
        }
  
      default:
        return state
    }
  }
  
  export default createPostInternshipReducer
  