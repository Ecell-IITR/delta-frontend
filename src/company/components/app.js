import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './login/index'
import { Navbar } from '../../coreContainers'

class CompanyIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="Path url" component="Component Name" />
        </Switch>
        <Login />
      </>
    )
  }
}

export default CompanyIndex
