import React, { Component } from "react";
import data from "./data.json";
import "./searchbar.css";
class Searchbar extends Component {
  constructor(props) {
    super(props);
    state = {
      list: data,
      searchterm: ""
    };
    this.handleSearchchange = this.handleSearchchange.bind(this);
  }
  handleSearchchange(event) {
    this.setState({ searchterm: event.target.value });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          className="core-searchbar"
          style={{
            position: "absolute",
            marginLeft: "184px",
            marginTop: "25px",
            width: "340px",
            height: " 46px",
            borderRadius: " 5px",
            backgroundColor: " #eeeeee"
          }}
          onChange={handleSearchchange}
        />
      </div>
    );
  }
}

export default Searchbar;
