import { combineReducers } from 'redux'
import studentReducer from '../student/reducers/index'
import companyReducer from '../company/reducers/index'

const rootReducer = combineReducers({
  studentReducer,
  companyReducer,
})

export default rootReducer
