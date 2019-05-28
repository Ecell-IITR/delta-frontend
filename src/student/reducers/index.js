import { combineReducers } from "redux"
import registration from "./register"
import login from "./login"
import profile from "./profile"

const studentReducer = combineReducers({
	registration,
	login,
	profile
})

export default studentReducer
