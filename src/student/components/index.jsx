import React, { Component } from "react";
import Login from "./login/index";
import Navbar from '../../core_containers/Navbar/Navbar.js'
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
        <Provider store={store}><Navbar/><Login /></Provider>
        
      </div>
    );
  }
}

export default StudentIndex;
