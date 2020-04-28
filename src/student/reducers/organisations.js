import {
    FETCH_ORGANISATIONS_REQUEST,
    FETCH_ORGANISATIONS_SUCCESS,
    FETCH_ORGANISATIONS_FAILURE,
} from '../constants/index'

const initialState = {
    isFetching: false,
    error: '',
    organisations: {},
}

const organisations = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORGANISATIONS_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_ORGANISATIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                organisations: action.payload,
            }
        case FETCH_ORGANISATIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default organisations
