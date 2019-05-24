import {
	LOGIN_REQUEST,
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
	REGISTER_FAILURE,
	REGISTER_SUCCESS,
	REGISTER_REQUEST,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS
} from "../constants/index"
import FetchApi from "../../utils/FetchAPI"
import { setToken, logout } from "../utils.js"

export const login = (username, password) => {
	return dispatch => {
		const data = {
			email: username,
			password: password
		}
		dispatch(request())
		FetchApi("POST", "/api/v1/auth/login", data)
			.then(res => {
				if (res.data && res.data.token) {
					setToken("student", res.data.token)
					dispatch(success(res.data.token))
					alert("Congratulation You are logged in")
				}
			})
			.catch(error => {
				dispatch(failure(error))
				alert("Wrong credentials")
			})
	}

	function request() {
		return { type: LOGIN_REQUEST }
	}
	function success(data) {
		return { type: LOGIN_SUCCESS, payload: data }
	}
	function failure(error) {
		return { type: LOGIN_FAILURE, error }
	}
}

export const log_out = () => {
	return dispatch => {
		dispatch(request())
		logout("student")
		dispatch(success())
	}

	function request() {
		return { type: LOGOUT_REQUEST }
	}
	function success(data) {
		return { type: LOGOUT_SUCCESS }
	}
}

export const register = (username, email, password1, password2) => {
	const data = {
		username: username,
		email: email,
		password: password1,
		password2: password2
	}
	return dispatch => {
		dispatch(request(data))
		FetchApi("POST", "/api/auth/register/", data)
			.then(res => {
				if (res.data) {
					dispatch(success(res.data))
					alert("registerd")
				}
			})
			.catch(error => {
				dispatch(failure(error))
			})
	}

	function request() {
		return { type: REGISTER_REQUEST }
	}
	function success(data) {
		return { type: REGISTER_SUCCESS, payload: data }
	}
	function failure(error) {
		return { type: REGISTER_FAILURE, payload: error }
	}
}
export const ShowInfo = () => {
	const action = {
		type: "RENDER_INFO"
	}

	return action
}
