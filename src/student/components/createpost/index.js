import React, { Component } from 'react'
import CreatePostSidebar from './sidebar'
import { Switch, Route } from 'react-router-dom'
import Internship from './internship'

export class CreatePost extends Component {
    render() {
        return (
            <>
                <h1>CreatePOst</h1>
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

export default CreatePost
