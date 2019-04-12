import React, { Component } from "react"
import { Route } from "react-router-dom"
import App from "./components/app"

export default class AppRouter extends Component {
	render () {
		const { match } = this.props
		return (
			<React.Fragment>
				<Route path={`${match.path}`} component={App} />
			</React.Fragment>
		)
	}
}
