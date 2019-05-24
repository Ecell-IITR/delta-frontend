import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		localStorage.getItem("student")
			? <Component {...props} />
			: <Redirect to={{ pathname: "/student/login", state: { from: props.location } }} />
	)} />
)

export default PrivateRoute