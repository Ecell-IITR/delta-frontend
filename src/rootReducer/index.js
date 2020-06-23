import { combineReducers } from 'redux'
import studentReducer from '../student/reducers'
// import companyReducer from '../company/reducers'
import authReducer from './auth.js'

const rootReducer = combineReducers({
  student: studentReducer,
  auth: authReducer,
})

export default rootReducer
