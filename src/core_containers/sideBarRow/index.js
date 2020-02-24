import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/sidebarRow.css'
import { Icon } from 'semantic-ui-react'
export default class SideBarRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseOver: false
    }
  }
  handleHover = () => {
    this.setState({
      mouseOver: !this.state.mouseOver
    })
  }
  render() {
    const { mouseOver } = this.state
    return (
      <div
        className="each-row"
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
        style={mouseOver ? { backgroundColor: '#2964ee' } : null}
      >
        <Icon
          name={this.props.Icon}
          size="big"
          className="icon-style"
          style={mouseOver ? { color: 'white' } : null}
        />
        <span
          className="name-each-row"
          style={mouseOver ? { color: 'white' } : null}
        >
          {this.props.Title}
        </span>
      </div>
    )
  }
}
SideBarRow.propTypes = {
  Icon: PropTypes.string,
  Title: PropTypes.string
}
