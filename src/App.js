import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import './App.css'

const StudentIndex = Loadable({
  loader: () => import('./student/index'),
  loading: () => <div>Loading</div>
})

const CompanyIndex = Loadable({
  loader: () => import('./company/index'),
  loading: () => <div>Loading</div>
})
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/student" component={StudentIndex} />
          <Route path="/company" component={CompanyIndex} />
        </Switch>
      </BrowserRouter>
    )
  }
}
