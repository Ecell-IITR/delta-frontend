import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Register from "./register/index"
import { connect } from "react-redux"
import Dashboard from "./dashboard/index"
import PropTypes from "prop-types"
import Logout from "./logout/index"
import Login from "./login/index"
import PrivateRoute from "./pR"
// import { Navbar } from "../../core_containers"
class StudentIndex extends Component {
	render() {
		const { match, auth } = this.props
		return (
			<React.Fragment>
				<Switch>
					<PrivateRoute exact path={`${match.path}/`} component={Dashboard} />
					<Route path={`${match.path}/logout`} component={Logout} />
					<Route path={`${match.path}/login`} component={Login} />
					<Route path={`${match.path}/register`} component={Register} />
				</Switch>
			</React.Fragment>
		)
	}
}

StudentIndex.propTypes = {
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.studentReducer.login
})

export default connect(mapStateToProps)(StudentIndex)
