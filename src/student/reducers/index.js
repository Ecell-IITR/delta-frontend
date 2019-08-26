import { combineReducers } from 'redux'
import registration from './register'
import login from './login'
import profile from './profile'
import user from './user'
import skill from './skill'

const studentReducer = combineReducers({
  registration,
  login,
  profile,
  user,
  skill
})

export default studentReducer
