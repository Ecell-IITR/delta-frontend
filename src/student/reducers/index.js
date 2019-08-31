import { combineReducers } from 'redux'
import registration from './register'
import login from './login'
import profile from './profile'
import user from './user'
import skill from './skill'
import resume from './resume'

const studentReducer = combineReducers({
  registration,
  login,
  profile,
  user,
  skill,
  resume
})

export default studentReducer
