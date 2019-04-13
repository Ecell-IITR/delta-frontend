import { combineReducers } from "redux"
import registration from "./register" 
import login from "./login"

const studentReducer = combineReducers({
	registration,
	login
})

export default studentReducer
