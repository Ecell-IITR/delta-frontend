import React, { Component } from "react";
import Login from "./login/index";
class StudentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default StudentIndex;
