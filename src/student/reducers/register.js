import { StudentConstants } from "../constants/index"

const registration = (state={}, action) => {
	switch (action.type) {
	case StudentConstants.REGISTER_REQUEST:
		return {
			registering: true
		}
	case StudentConstants.REGISTER_SUCCESS:
		return {}
	case StudentConstants.REGISTER_FAILURE:
		return {}
	default: 
		return state
	}
} 

export default registration
