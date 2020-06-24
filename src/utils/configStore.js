import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../rootReducer'

const initialState = {}
const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  import { createLogger } from 'redux-logger'
  const logger = createLogger()
  middleware = [...middleware, logger]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
)
