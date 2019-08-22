import { combineReducers } from 'redux'
import registration from './register'
import login from './login'
import profile from './profile'
import user from './user'

const studentReducer = combineReducers({
  registration,
  login,
  profile,
  user
})

export default studentReducer
