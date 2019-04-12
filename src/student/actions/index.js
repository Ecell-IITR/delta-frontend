import { StudentConstants } from "../constants/index"
import FetchApi from "../../utils/FetchAPI"
import axios from "axios"
import { hasToken, setToken } from "../utils.js"

export const login = (username, password) => {
	return dispatch => {

		const data = {
			username: username,
			password: password
		}
		dispatch(request(data))
		FetchApi("POST", "/api/auth/jwt/", data)
			.then( res => {
				dispatch(success(data))
				if(res.data.token) {
					setToken("student",res.data.token)
					alert("Congratulation You are logged in")
				}
			})
			.catch(err => {
				dispatch(failure(err))
				alert("Wrong credentials")
			})
	}

	function request(user)  { return { type : StudentConstants.LOGIN_REQUEST, user } }
	function success(user)  { return { type : StudentConstants.LOGIN_SUCCESS, user } }
	function failure(error) { return { type : StudentConstants.LOGIN_FAILURE, error } }
}

export const register = (username, email, password1, password2) => {
	const data = {
		username: username,
		email: email,
		password: password1,
		password2: password2,
	}
	return dispatch => {
		dispatch(request(data))
		FetchApi("POST", "/api/auth/register/", data)
			.then(res => {
				if(res.data.token) {
					dispatch(success(data))
					alert("registerd")
				}
			})
			.catch(err => {
				dispatch(failure(err))
			})
	}

	function request(user) { return { type: StudentConstants.REGISTER_REQUEST, user } }
	function success(user) { return { type: StudentConstants.REGISTER_SUCCESS, user } }
	function failure(error) { return { type: StudentConstants.REGISTER_FAILURE, error } }
}
