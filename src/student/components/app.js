import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Login from "./login/index"
import Register from "./register/Index"
import { Navbar } from "../../core_containers"
class StudentIndex extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<React.Fragment>
				<Navbar/>
				<Switch>
					<Route exact path="/student/login" component={Login} />
					<Route exact path="/student/register" component={Register} />
				</Switch>
			</React.Fragment>
		)
	}
}

export default StudentIndex
