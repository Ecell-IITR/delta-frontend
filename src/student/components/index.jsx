import React, { Component } from "react";
import StudentLogin from "./StudentLogin/StudentLogin";
class StudentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <StudentLogin />
      </div>
    );
  }
}

export default StudentIndex;
