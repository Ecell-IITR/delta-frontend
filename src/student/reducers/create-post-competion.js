import {
  CREATE_POST_FAILURE,
  CREATE_POST_LOADING,
  CREATE_POST_SUCCESS,
} from '../constants/index'

const initialState = {
  data: {
    title: '',
    typeOfCompetition: '',
    competitionDescription: '',
    poster: null,
    dateOfCompetition: '',
    postExpiryDate: '',
    link: '',
    prize: [],
    requiredSkills: [],
  },
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
          title: action.payload.title,
          typeOfCompetition: action.payload.typeOfCompetition,
          competitionDescription: action.payload.competitionDescription,
          poster: action.payload.poster,
          dateOfCompetition: action.payload.dateOfCompetition,
          postExpiryDate: action.payload.postExpiryDate,
          link: action.payload.link,
          prize: action.payload.prize,
          requiredSkills: action.payload.requiredSkills,
        },
      }

    default:
      return state
  }
}

export default createPostCompetitionReducer
