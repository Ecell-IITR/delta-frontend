import React, { Component } from "react";
import Searchbar from "../searchbar";
import ImageIndex from "../image";
import "./navbar.css";
class Navbar extends Component {
  state = {}; 
  render() {
    return (
      <div className="navbar">
        <div className="title">DELTA</div>
        {/* <Searchbar /> */}
        <div className="subnavbar">
          <ul>
            <li>
              <a href="" className="profile">
                Profile
              </a>
            </li>
            <li>
              <a href="" className="opportunities">
                Opportunities
              </a>
            </li>{" "}
            <li>
              <a href="" className="createpost">
                Create Post
              </a>
            </li>{" "}
            <li>
              <a href="" className="notification">
                Notification
              </a>
            </li>{" "}
            <li>
              <a href="" className="more">
                More
              </a>
            </li>
          </ul>
          <ImageIndex
            image="asdfgh"
            size="zcvbn"
            shape="circular"
            className="profilepic"
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
