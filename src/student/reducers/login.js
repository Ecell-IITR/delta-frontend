import { StudentConstants } from "../constants/index"

const login = (state={}, action) => {
	switch (action.type) {
	case StudentConstants.LOGIN_REQUEST:
		return {
			login: true
		}
	case StudentConstants.LOGIN_SUCCESS:
		return {}
	case StudentConstants.LOGIN_FAILURE:
		return {}
	default: 
		return state
	}
} 

export default login
