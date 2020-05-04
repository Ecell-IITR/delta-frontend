import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import { createBrowserHistory } from 'history'
import { BrowserRouter } from 'react-router-dom'
import Notifications from 'react-notify-toast'
import { Provider } from 'react-redux'
import { store } from 'utils/configStore'
import Loader from 'coreContainers/loading'
import App from './App'

import 'semantic-ui-css/semantic.min.css'
import './index.css'

import * as serviceWorker from './serviceWorker'

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <Notifications />
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
