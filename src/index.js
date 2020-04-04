import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications'
import { store } from './utils/helpers/configStore'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
