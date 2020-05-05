import { combineReducers } from 'redux'
import registration from './register'
import profile from './profile'
import user from './user'
import skill from './skill'
import resume from './resume'
import search from './search'
import organisations from './organisations'
import opportunities from './opportunities'
import followinglist from './followinglist'

const studentReducer = combineReducers({
  registration,
  profile,
  user,
  skill,
  resume,
  search,
  organisations,
  opportunities,
  followinglist,
})

export default studentReducer
