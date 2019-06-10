import React, { Component } from "react"
import { Icon, Label } from "semantic-ui-react"
export default class label extends Component {
	render() {
		return (
			<div>
				<Label image>
					{this.props.labelName}
					<Icon name="delete" />
				</Label>
			</div>
		)
	}
}
