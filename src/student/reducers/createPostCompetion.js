import {
    CREATE_POST_FAILURE,
    CREATE_POST_LOADING,
    CREATE_POST_SUCCESS,
} from '../constants/index'

const initialState = {
    data: {
        title: '',
        type_of_competition: '',
        competition_description: '',
        poster: null,
        date_of_competition: '',
        post_expiry_date: '',
        link: '',
        prize: [],
        required_skills: []

    }
}


const createPostCompetitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_FAILURE:
      return action.hasErrored

    case CREATE_POST_LOADING:
      return action.isLoading

    case CREATE_POST_SUCCESS:
      return {
          ...state,
          data: {
              
          }
      }

    default:
      return state
  }
}


export default createPostCompetitionReducer