import {
    FETCH_FOLLOWING_LIST_REQUEST,
    FETCH_FOLLOWING_LIST_SUCCESS,
    FETCH_FOLLOWING_LIST_FAILURE,
} from '../constants/index'

const initialState = {
    isFetching: false,
    error: '',
    followinglist: {},
}

const followinglist = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FOLLOWING_LIST_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_FOLLOWING_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                followinglist: action.payload,
            }
        case FETCH_FOLLOWING_LIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default followinglist
