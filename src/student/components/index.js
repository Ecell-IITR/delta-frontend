import React, { Component } from "react"
import Login from "./login/index"
// import Navbar from "../../core_containers/Navbar/Navbar.js"

class StudentIndex extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		return (
			<div>
				{/* <Navbar /> */}
				<Login />
			</div>
		)
	}
}

export default StudentIndex
