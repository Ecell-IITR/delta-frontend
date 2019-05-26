import React, { Component } from "react"
import { hasToken } from "../../utils"
import { TOKEN_TYPE } from "../../constants/index"
import { set_user } from "../../actions/index"
import { connect } from "react-redux"
class StudentDashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		if (!hasToken(TOKEN_TYPE)) {
			this.props.history.push("/student/")
		} else {
			this.props.set_user()
		}
	}
	render() {
		return <div>Welcome!</div>
	}
}

const mapActionToProps = dispatch => {
	return {
		set_user: (username, password, callback) => {
			return dispatch(set_user(username, password, callback))
		}
	}
}

export default connect(
	null,
	mapActionToProps
)(StudentDashboard)
