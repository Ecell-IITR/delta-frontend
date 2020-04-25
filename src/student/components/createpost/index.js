import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import CreatePostSidebar from './sidebar'
import Internship from './internship'

export class CreatePost extends Component {
  render() {
    const { match } = this.props
    return (
      <>
        <h1>CreatePost</h1>
        <div>
          <CreatePostSidebar />
        </div>
        <Switch>
          <Route
            exact
            path={`${match.path}/internship`}
            component={React.lazy(() => import('./internship'))}
          />
          <Route
            exact
            path={`${match.path}/project`}
            component={React.lazy(() => import('./project'))}
          />
          <Route
            exact
            path={`${match.path}/competition`}
            component={React.lazy(() => import('./competition'))}
          />
        </Switch>
        <div>
          <Internship />
        </div>
      </>
    )
  }
}

CreatePost.propTypes = {
  match: PropTypes.object,
}

export default CreatePost
