import React, { Component } from "react";
import { Link } from "react-router-dom";
import GenInputField from "../../../core_containers/inputfield/GenInput/GenInputField";
import PasswordInputField from "../../../core_containers/inputfield/PasswordInput/PasswordInputField";
import SubmitButton from "../../../core_containers/buttons/SubmitButton";
import "./StudentLogin.css";
export default class StudentLogin extends Component {
  render() {
    return (
      <div className="login">
        <div className="loginInput">
          <div className="heading">Welcome to DELTA</div>
          <div className="subheading">
            An online opportunity portal for students of IIT-R
          </div>
          <GenInputField placeholder="Email ID" className="loginField" />
          <PasswordInputField className="loginField" />
          <div className="forgotPassword">
            <Link to="#">Forgot Password?</Link>
          </div>
          <SubmitButton buttonContent="Sign Up" className="loginSubmit" />
        </div>
      </div>
    );
  }
}
