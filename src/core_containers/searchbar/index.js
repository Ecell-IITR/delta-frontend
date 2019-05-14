import React, { Component } from "react"
import data from "./data.json"
import "../css/searchbar.css"
class Searchbar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: data,
			searchterm: ""
		}
	}
	handleSearchchange = event => {
		this.setState({ searchterm: event.target.value })
	}
	render() {
		return (
			<div>
				<input
					type="text"
					className="core-searchbar"
					onChange={this.handleSearchchange}
				/>
			</div>
		)
	}
}

export default Searchbar
