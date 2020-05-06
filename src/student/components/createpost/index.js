import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import CreatePostSidebar from './sidebar'
import styles from "./createpost.css"

export class CreatePost extends Component {
  render() {
    const { match } = this.props
    return (
      <div className={styles.createpostcontainer}>
        <div className={styles.sidecontainer}>
          <CreatePostSidebar />
        </div>
        <div className={styles.subcontainer}>
          <Switch>
            <Route
              exact
              // path={`${match.path}/internship`}
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
        </div>
      </div>
    )
  }
}

CreatePost.propTypes = {
  match: PropTypes.object,
}

export default CreatePost
