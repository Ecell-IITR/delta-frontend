import { combineReducers } from "redux"
import registration from "./register"
import login from "./login"
import studentInfo from "./studentInfo"

const studentReducer = combineReducers({
	registration,
	login,
	studentInfo
})

export default studentReducer
