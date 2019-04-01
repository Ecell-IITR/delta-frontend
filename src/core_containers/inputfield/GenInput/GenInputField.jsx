import React, { Component } from "react";
import { Form } from "semantic-ui-react";

import "../InputField.css";
export default class GenInputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { placeholder } = this.props;
    return (
      <Form.Input
        className={`general ${this.props.className}`}
        placeholder={placeholder}
      />
    );
  }
}
