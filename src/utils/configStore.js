import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../rootReducer'

const initialState = {}
let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger()
  middleware = [...middleware, logger]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
)
