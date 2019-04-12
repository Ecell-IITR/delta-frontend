import { StudentConstants } from "../constants/index"

export const registration = (state={}, action) => {
	switch (action.type) {
	case StudentConstants.REGISTER_REQUEST:
		return {
            registering: true
		}
	case StudentConstants.REGISTER_SUCCESS:
            console.log('rfdasfegister-rea')
		return {}
	case StudentConstants.REGISTER_FAILURE:
		return {}
	default: 
            console.log('rfdasfegister-rea')
		return state
	}
} 
