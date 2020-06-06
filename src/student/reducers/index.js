import { combineReducers } from 'redux'
import registration from './register'
import profile from './profile'
import user from './user'
import skill from './skill'
import createPost from './create-post'
import resume from './resume'
import search from './search'
import organisations from './organisations'
import opportunities from './opportunities'
import followinglist from './followinglist'
import unfollowuser from './unfollowuser'
import followuser from './followuser'
import filters from './filters'

const studentReducer = combineReducers({
  registration,
  profile,
  user,
  skill,
  resume,
  createPost,
  search,
  organisations,
  opportunities,
  followinglist,
  followuser,
  unfollowuser,
  filters
})

export default studentReducer
