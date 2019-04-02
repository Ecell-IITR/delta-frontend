import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Input, SubmitButton } from "../../../core_containers"

import "../css/login.css";
export default class LoginIndex extends Component {
  render() {
    return (
      <div className="login">
        <div className="loginInput">
          <div className="heading">Welcome to DELTA</div>
          <div className="subheading">
            An online opportunity portal for students of IIT-R
          </div>
          <Input type="email" placeholder="Email ID" className="loginField" />
          <Input type="password" placeholder="Password" className="loginField" />
          <div className="forgotPassword">
            <Link to="#">Forgot Password?</Link>
          </div>
          <SubmitButton buttonContent="Sign Up" className="loginSubmit" />
        </div>
      </div>
    );
  }
}
