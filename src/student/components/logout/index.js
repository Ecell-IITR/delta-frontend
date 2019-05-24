import React, { Component } from "react"
import { connect } from "react-redux"
import { log_out } from "../../actions/index"
class Logout extends Component {
	componentDidMount() {
		console.log(this.props)
		this.props.logout()
	}
	render() {
		return <></>
	}
}

const mapActionToProps = dispatch => {
	return {
		logout: () => {
			return dispatch(log_out())
		}
	}
}

export default connect(null,mapActionToProps)(Logout)
