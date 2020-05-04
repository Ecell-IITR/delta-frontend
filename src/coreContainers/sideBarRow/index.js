import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'
import styles from './sidebarRow.module.css'

export default class SideBarRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseOver: false,
    }
  }

  handleHover = () => {
    this.setState({
      mouseOver: !this.state.mouseOver,
    })
  }

  render() {
    const { mouseOver } = this.state
    return (
      <div
        className={styles.eachrow}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
        style={mouseOver ? { backgroundColor: '#2964ee' } : null}
      >
        <Icon
          name={this.props.Icon}
          size="big"
          className={styles.iconstyle}
          style={mouseOver ? { color: 'white' } : null}
        />
        <span
          className={styles.nameeachrow}
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
  Title: PropTypes.string,
}
