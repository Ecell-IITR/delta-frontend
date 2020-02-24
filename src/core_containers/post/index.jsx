import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {
  Container,
  Header,
  Checkbox,
  Divider,
  Dropdown
} from 'semantic-ui-react'
import styles from '../css/post.module.css'
import ImageIndex from '../image'

export default class Post extends Component {
  render() {
    let { designation, stipend, duration } = this.props
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
          <div className={styles.div3}>
            <div className={styles.div3 - 1}>
              <Router>
                <ul>
                  <li>
                    <Link to={'/Edit'}>Edit</Link>
                  </li>
                  <li>
                    <Link to={'/Repost'}>Repost</Link>
                  </li>
                </ul>
              </Router>
            </div>
            <div className={styles.div3 - 2}>
              <Dropdown text="View More">
                <Dropdown.Menu>
                  <Dropdown.Item text="New" />
                  <Dropdown.Item text="Open..." description="ctrl + o" />
                  <Dropdown.Item text="Save as..." description="ctrl + s" />
                  <Dropdown.Item text="Rename" description="ctrl + r" />
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
