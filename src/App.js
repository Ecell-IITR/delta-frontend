import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import "./App.css";
import Navbar from "./core_containers/Navbar/Navbar.js";

const HomeIndex = Loadable({
  loader: () => import("./student/components/index"),
  loading: () => <div>Loading</div>
});
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default App;
