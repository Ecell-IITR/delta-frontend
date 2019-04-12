import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Input, SubmitButton } from "../../../core_containers"
import "../css/login.css"

class LoginIndex extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "" 
        }
    }

    onChange(e) {
        const name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
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
                        <Input type="email" placeholder="Email ID" className="loginField" name="email" onChange={this.onChange}/>
                        <Input type="password" placeholder="Password" className="loginField" name="password" onChange={this.onChange} />
                        <div className="forgotPassword">
                            <Link to="#">Forgot Password?</Link>
                        </div>
                        <SubmitButton buttonContent="Sign Up" className="loginSubmit" />
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
	}
}

const mapDispatchToProps = dispatch => {
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginIndex)
