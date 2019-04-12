import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Input, SubmitButton } from "../../../core_containers"
import { register } from "../../actions/index"
import validateInput from "../../../utils/validation/validation"
import "../css/login.css"

class RegisterStudent extends Component {

	constructor() {
		super()
		this.state = {
			username: "dsa",
			email: "fdaks@kfa.ocm",
			password1: "sheyansh",
			password2: "sheyansh",
            errors:""
		}
	}

    onChange = (e) => {
    	const name = e.target.name
    	let value = e.target.value
    	this.setState({
    		[name]: value,
            errors: ""
    	})
    }

    handleSubmit = (e) => {
    	e.preventDefault()
    	let { username, email, password1, password2 } = this.state
        if(username) {
            username = username.trim()
        }
        if(email) {
            email = email.trim()
        }
        if(password1) {
            password1 = password1.trim()
        }
        if(password2) {
            password2 = password2.trim()
        }
        if(password1 === password2) {
            const checkEmail = validateInput(email, "email")
            const checkPass  = validateInput(password1, "password")
            if(checkEmail.isValid && checkPass.isValid) {
                this.props.dispatch(register(username, email, password1, password2))
            }
            else {
                this.setState({
                    errors: checkEmail.errors.email ? checkEmail.errors.email : checkPass.errors.password
                })
            }
        }
        else {
            this.setState({
                errors: "Passwords are not matching"
            })
        }
    }

    render() {
    	return (
    		<div>
                {this.state.errors}
    			<form onSubmit={this.handleSubmit}>
    				<Input type="text" placeholder="Username" name="username" onChange={this.onChange} value={this.state.username}/>
    				<Input type="email" placeholder="Email ID" name="email" onChange={this.onChange} value={this.state.email}/>
    				<Input type="password" placeholder="password1" name="password1" onChange={this.onChange} value={this.state.password1}/>
    				<Input type="password" placeholder="password2" name="password2" onChange={this.onChange} value={this.state.password2}/>
    				<SubmitButton />
    			</form>
    		</div>
    	)
    } }

RegisterStudent.propTypes = {
    dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return {
		registering: state.registering
	}
}

export default connect(mapStateToProps)(RegisterStudent)
