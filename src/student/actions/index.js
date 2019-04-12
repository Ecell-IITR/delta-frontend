import { StudentConstants } from "../constants/index"
import FetchApi from "../../utils/FetchAPI"
import axios from "axios"
import { hasToken, setToken } from "../utils.js"

// export const login = (email, password) => {
// 	return dispatch => {
// 		dispatch(request(email))

//         const data = {
//             email: email,
//             password: password
//         }

//         FetchApi("POST", "/student/register", data)
// 		.then(
// 		    user => { 
// 		        dispatch(success(user));
// 		        history.push('/');
// 		    },
// 		    error => {
// 		        dispatch(failure(error));
// 		    }
// 		);
// 	}

//     const request = (user) => { 
//         return { type: StudentConstants.LOGIN_REQUEST, user }
//     }
//     const success = (user) => {
//         return { type: StudentConstants.LOGIN_SUCCESS, user }
//     }
//     const failure = (error) => {
//         return { type: StudentConstants.LOGIN_FAILURE, error }
//     }
// }

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
        // axios.post("/api/auth/register/", data)
            .then(res => {
				if(res.data.token) {
                    dispatch(success(data))
                    alert('registerd')
				}
			})
			.catch(err => {
                console.log(err)
			})
	}

	function request(user) { return { type: StudentConstants.REGISTER_REQUEST, user } }
	function success(user) { return { type: StudentConstants.REGISTER_SUCCESS, user } }
	function failure(error) { return { type: StudentConstants.REGISTER_FAILURE, error } }
}
