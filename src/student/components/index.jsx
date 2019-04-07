import React, { Component } from "react";
import Login from "./login/index";
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducer from '../reducers/index'
const store = createStore(reducer);
class StudentIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Provider store={store}><Login /></Provider>
      </div>
    );
  }
}

export default StudentIndex;
