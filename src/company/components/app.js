import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Login from "./login/index"
import { Navbar } from "../../core_containers"
import Post from "./post/index"


class CompanyIndex extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<React.Fragment>
				<Navbar/>
				<Switch>
					<Route exact path={"Path url"} component={"Component Name"} />
				</Switch>
				<Post />
			</React.Fragment>
		)
	}
}

export default CompanyIndex
