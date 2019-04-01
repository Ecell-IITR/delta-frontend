import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import "../InputField.css";
export default class SubmitButton extends Component {
  render() {
    return (
      <Form.Input
        className={`general ${this.props.className}`}
        placeholder="Password"
        type="password"
      />
    );
  }
}
