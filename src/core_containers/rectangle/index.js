import React, { Component } from 'react'
import styles from '../css/rectangle.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Rectangle extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let content = ['posts', 'skills', 'achievements', 'resume']
    // const { match } = this.props
    //console.log(this.props.match)
    return (
      <div className={styles.rectangle}>
        {content.map((item, index) => {
          return (
            <Link to={`/student/profile/${item}`} key={index}>
              <div className={styles.item}>
                <div className={styles.blank}></div>
                <span className={styles.text}>{item}</span>
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}
Rectangle.propTypes = {
  rectangle: PropTypes.string.isRequired,
  blank: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired
}
export default Rectangle
