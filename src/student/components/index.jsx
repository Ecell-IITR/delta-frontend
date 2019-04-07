import React, { Component } from "react";
import Login from "./login/index";
<<<<<<< HEAD
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
=======
import Navbar from '../../core_containers/Navbar/Navbar.js'

class StudentIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Navbar />
                <Login />
            </div>
        );
    }
>>>>>>> e11562acee4553631b18e437d1dd1d6fbcbc97dd
}

export default StudentIndex;
