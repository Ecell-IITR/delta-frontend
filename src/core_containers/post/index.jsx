import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {
  Container,
  Header,
  Checkbox,
  Divider,
} from 'semantic-ui-react'
import styles from '../css/post.module.css'
import ImageIndex from '../image'
import PropTypes from 'prop-types'

export default class Post extends Component {
  render() {
    let { designation, stipend, duration, imginfo } = this.props
    let info = ['9 Applicants', 'Bangalore', '2 weeks', '2 months']
    return (
      <div className={styles.post}>
        <Container>
          <div className={styles.div1}>
            <div className={styles.div1 - 1}>
              <Header className={styles.header1} as="h1">
                {designation + ' '}
              </Header>
              <Header className={styles.header2} as="h1">
                {stipend + '.' + duration}
              </Header>
            </div>
            <div className={styles.div1 - 2}>
              <ImageIndex />
            </div>
          </div>
          <div className={styles.div2}>
            <ul>
              {info.map(a => (
                <li>
                  <Checkbox className={styles.checkbox} label={a} />
                </li>
              ))}
            </ul>
          </div>
          <Divider />

          <div className={styles.div3 - 2}>
            <div className={styles.viewMoreContainer}>
              <input type="checkbox" />
              <span className={styles.viewMore}>
                <i className={`angle down icon ${styles.arrowDown}`}></i> View
                More
              </span>
              <span className={styles.viewMoreDescription}>
                Test Description
              </span>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
Post.propTypes = {
  post: PropTypes.string,
  designation: PropTypes.string.isRequired,
  stipend: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired,
  imginfo: PropTypes.string
}
