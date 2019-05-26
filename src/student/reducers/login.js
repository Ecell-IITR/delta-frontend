import {
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	SET_USER_AUTH
} from "../constants/index"

const initialState = {
	isauthenticating: false,
	isauthenticated: false,
	token: "",
	error: ""
}

const login = (state = initialState, action) => {
	switch (action.type) {
	case LOGIN_REQUEST:
		return {
			...state,
			isauthenticating: true
		}
	case LOGIN_SUCCESS:
		return {
			...state,
			isauthenticating: false,
			isauthenticated: true,
			token: action.payload
		}
	case LOGIN_FAILURE:
		return {
			...state,
			isauthenticating: false,
			error: action.payload
		}
	case SET_USER_AUTH:
		return {
			...state,
			isauthenticated: true,
			token: action.payload
		}
	case LOGOUT_REQUEST:
		return {
			...state,
			isauthenticating: true
		}
	case LOGOUT_SUCCESS:
		return {
			isauthenticating: false,
			isauthenticated: false
		}
	default:
		return state
	}
}

export default login
