import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Input, SubmitButton } from "../../../core_containers"
import validateInput from "../../../utils/validation/validation"
import { login } from "../../actions/index"
import "../css/login.css"

class LoginIndex extends Component {
	constructor() {
		super()
		this.state = {
			username: "shreyansh",
			password: "shreyansh" 
		}
	}

    onChange = (e) => {
    	const name = e.target.name
    	let value = e.target.value
    	this.setState({
    		[name]: value
    	})
    }

    handleSubmit = (e) => {
    	e.preventDefault()
    	let { username, password } = this.state
    	if(username) {
    		username = username.trim()
    	}
    	if(password) {
    		password = password.trim()
    	}
    	const checkPass = validateInput(password,"password")
    	if(checkPass.isValid) {
    		this.props.dispatch(login(username, password))
    	}
    	else {
    		this.setState({
    			errors: checkPass.errors.password
    		})
    	}
    }

    render() {
    	return (
    		<div className="login">
    			<div className="loginInput">
    				<div className="heading">Welcome to DELTA</div>
    				<div className="subheading">
            An online opportunity portal for students of IIT-R
    				</div>
    				<form onSubmit={this.handleSubmit}>
    					<input type="text" placeholder="Email ID" className="loginField" name="username" value={this.state.username} onChange={this.onChange}/><br />
    					<input type="password" placeholder="Password" className="loginField" name="password" value={this.state.password} onChange={this.onChange} />
    					<div className="forgotPassword">
    						<Link to="#">Forgot Password?</Link>
    					</div>
    					<SubmitButton buttonContent="Log in" className="loginSubmit" />
    				</form>
    			</div>
    		</div>
    	)
    }
}

// Props validation
LoginIndex.propTypes = {

}

const mapStateToProps = (state) => {
	return {
		login: state.login 
	}
}

export default connect(mapStateToProps)(LoginIndex)
