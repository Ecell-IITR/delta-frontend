<<<<<<< HEAD
import React, { Component } from 'react'
import styles from '../css/rectangle.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
=======
import React, { Component } from "react"
import styles from "../css/rectangle.module.css"
import PropTypes from "prop-types"
>>>>>>> PropType added

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
            <Link to={`/profile/${item}`} key={index}>
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
<<<<<<< HEAD
  rectangle: PropTypes.string.isRequired,
  blank: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired
}
export default Rectangle
=======
	rectangle: PropTypes.string.isRequired,
	item: PropTypes.string.isRequired,
	blank: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	item: PropTypes.string.isRequired,
}
export default Rectangle
>>>>>>> PropType added
