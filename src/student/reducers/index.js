import { combineReducers } from "redux"
import registration from "./register" 
import login from "./login"
import example from "./example"

const studentReducer = combineReducers({
	example,
	registration,
	login
})

export default studentReducer
