const initialState = {
	info: "",
	isfetching: false
}

const profile = (state = initialState, action) => {
	switch (action.type) {
	case "PROFILE_REQUEST":
		return {
			...state,
			isfetching: true
		}
	case "PROFILE_SUCCESS":
		return {
			...state,
			info: action.payload,
			isfetching: false
		}
	default:
		return state
	}
}

export default profile
