import { combineReducers } from 'redux'
import registration from './register'
import profile from './profile'
import user from './user'
import skill from './skill'
import createPost from './create-post'
import resume from './resume'
import search from './search'
import organizations from './organizations'
import opportunities from './opportunities'
import unfollowuser from './unfollowuser'
import filters from './filters'

const studentReducer = combineReducers({
  registration,
  profile,
  user,
  skill,
  resume,
  createPost,
  search,
  organizations,
  opportunities,
  unfollowuser,
  filters,
})

export default studentReducer
