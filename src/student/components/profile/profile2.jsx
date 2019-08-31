import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import PropTypes from 'prop-types'
import '../css/profile2.css'

const Skills = Loadable({
  loader: () => import('../addSkill/index'),
  loading: () => <div>Loading ...</div>
})

const Resume = Loadable({
  loader: () => import('../resume/index'),
  loading: () => <div>Loading ...</div>
})

const Sidebar = Loadable({
  loader: () => import('../../../core_containers/rectangle/index.js'),
  loading: () => <div>Loading ...</div>
})

export default class Profile2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { match } = this.props

    return (
      <React.Fragment>
        <div className="profile2">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="contentBox">
            <Switch>
              <Route path={`${match.path}/skills`} componenet={Skills} />
              <Route exact path={`${match.path}/resume`} componenet={Resume} />
            </Switch>

            {/* <Skills /> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Profile2.propTypes = {
  match: PropTypes.object.isRequired
}
