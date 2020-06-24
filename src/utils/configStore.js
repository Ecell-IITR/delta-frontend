import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../rootReducer'

const initialState = {}
let middleware = [thunk]
console.log(process.env.NODE_ENV, process.env, 'tushar')
if (process.env.NODE_ENV !== 'production') {
  console.log('I am here')
  const logger = createLogger()
  middleware = [...middleware, logger]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
)
