import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import "../css/input.css";
export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { placeholder,type } = this.props;
    return (
      <Form.Input
        className={`general ${this.props.className}`}
        placeholder={placeholder}
        type={type}
      />
    );
  }
}
