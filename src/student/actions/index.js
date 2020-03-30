import {
	LOGIN_REQUEST,
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
	REGISTER_FAILURE,
	REGISTER_SUCCESS,
	REGISTER_REQUEST,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	SET_USER_AUTH,
	TOKEN_TYPE
} from "../constants/index"
import FetchApi from "../../utils/FetchAPI"
import { getToken, setToken, logout } from "../utils.js"
import { useToasts } from 'react-toast-notifications'

export const set_user = () => {
	return dispatch => {
		dispatch(set_user_auth(getToken(TOKEN_TYPE)))
	}

	function set_user_auth(token) {
		return {
			type: SET_USER_AUTH,
			payload: token
		}
	}
}

export const login = (username, password, callback) => {
	return dispatch => {
    const { addToast } = useToasts()
		const data = {
			email: username,
			password: password
		}
		dispatch(request())
		FetchApi("POST", "/api/v1/auth/login", data)
			.then(res => {
				if (res.data && res.data.token) {
					setToken(TOKEN_TYPE, res.data.token)
					dispatch(success(res.data.token))
					callback()
				}
			})
			.catch(error => {
        dispatch(failure(error))
        addToast(error.message, { appearance: 'error' })
        addToast("Wrong credentials!!", { appearance: 'warning', autoDismiss: false })
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

export const log_out = callback => {
	return dispatch => {
		dispatch(request())
		logout(TOKEN_TYPE)
		dispatch(success())
		callback()
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
    const { addToast } = useToasts()
		dispatch(request(data))
		FetchApi("POST", "/api/auth/register/", data)
			.then(res => {
				if (res.data) {
					dispatch(success(res.data))
					addToast("Registered", { appearance: 'success', autoDismiss: true })
				}
			})
			.catch(error => {
        dispatch(failure(error))
        addToast(error.message, { appearance: 'error' })
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
