import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/index"

const initialState = {
	isauthenticating: false,
	token:"",
	error:""
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
			token: action.payload
		}
	case LOGIN_FAILURE:
		return {
			...state,
			isauthenticating: false,
			error: action.payload
		}
	default:
		return state
	}
}

export default login
