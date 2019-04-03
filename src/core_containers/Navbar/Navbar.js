import React, { Component } from "react";
import { Link } from 'react-router-dom'
// import Searchbar from "../searchbar";
import ImageIndex from "../image/index";
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
                            <Link to="/" className="profile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="opportunities">
                                Opportunities
                            </Link>
                        </li>{" "}
                        <li>
                            <Link to="/" className="createpost">
                                Create Post
                            </Link>
                        </li>{" "}
                        <li>
                            <Link to="/" className="notification">
                                Notification
                            </Link>
                        </li>{" "}
                        <li>
                            <Link to="/" className="more">
                                More
                            </Link>
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
