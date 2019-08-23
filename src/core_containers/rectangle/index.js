import React, { Component } from 'react'
import styles from '../css/rectangle.module.css'
import PropTypes from 'prop-types'

class Rectangle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content
    }
  }

  render() {
    let content = ['Posts', 'Skills', 'Achievements', 'Resume'] // 1. added pseudo content
    //let content = this.state.content
    return (
      <div className={styles.rectangle}>
        {content.map(item => {
          return (
            <div className={styles.item}>
              <div className={styles.blank}></div>
              <span className={styles.text}>{item}</span>
            </div>
          )
        })}
      </div>
    )
  }
}
Rectangle.propTypes = {
  rectangle: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  blank: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired
}
export default Rectangle
