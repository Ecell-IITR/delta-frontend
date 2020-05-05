import React, { Component } from 'react'
import { Container, Header, Divider, Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from './post.module.css'
import ImageIndex from '../image'
import { Icon } from 'semantic-ui-react'
import { bookmarkData } from '../../student/actions'


export default class Post extends Component {
  constructor(props) {
    super(props)

    this.handleToggleBookmark = this.handleToggleBookmark.bind(this)

    this.state = {
      isBookmarked: false,
    }
  }

  handleToggleBookmark() {
    bookmarkData();
  }  
  
  

  render() {
    const { designation, stipend, duration, workDespription, skillsRequired, additionalInformation } = this.props
    const info = [
        {icon:'users',label:'9 Applicants'},
        {icon:'map marker alternate',label:'Bangalore'},
        {icon:'clock outline',label:'2 weeks'},
        {icon:'alarm',label:'2 months'}
      ]
    
    return (
      <div className={styles.post}>
        <Container>
          <div className={styles.div1}>
            <div className={styles["div1-1"]}>
              <Header className={styles.header1} as="h1">
                {designation + ' '}
              </Header>
              <Header className={styles.header2} as="h1">
                {stipend + '.' + duration}
              </Header>
            </div>
            <div className={styles["div1 - 2"]}>
              <div className={styles["div1-2-1"]}>
                <h3>
                  Flipkart
                </h3>
                <a href="flipkart.com">
                  flipkart.com
                </a>
              </div>
              <div >
                <ImageIndex 
                  image="src/images/blank-profile-picture-973460_1280 (1).png"
                  size="tiny"
                  shape="circular"
                />
              </div>
            </div>
          </div>
          <div className={styles.div2}>
            <ul>
              {info.map((a, index) => (
                <li key={index}>
                  <Icon name={a.icon} size="large" className={styles.icon}/>
                  <span className={styles.checkbox}>{a.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.extra}>
            <div className={styles.div4}>
              <Divider/>
                  <div>
                    <div className={styles["div4-1"]}>
                      <Header className={styles["viewmore-header"]} as="h2">Work Description</Header>
                      <div className={styles["viewmore-content"]}>
                      {workDespription}
                      {/* Deciding where in your app to introduce code splitting can be a bit tricky. You want to make sure you choose places that will split bundles evenly, but won’t disrupt the user experience.
                      A good place to start is with routes. Most people on the web are used to page transitions taking some amount of time to load. You also tend to be re-rendering the entire page at once so your users are unlikely to be interacting with other elements on the page at the same time. */}
                      </div>
                    </div>
                    <div className={styles["div4-2"]}>
                      <div className={styles["div4-2-1"]}>
                        <Header className={styles["viewmore-header"]} as="h2">Skill-set required</Header>
                        <div className={styles["viewmore-content"]}>
                          {/* {skillsRequired.map(skill => (<li>{skill}</li>))} */}
                          <li>Illustrattor</li>
                          <li>Creating Logo as and when required</li>
                        </div>
                      </div>
                      <div className={styles["div4-2-2"]}>
                        <Header className={styles["viewmore-header"]} as="h2">Additional Information</Header>
                        <div className={styles["viewmore-content"]}>
                          {/* {additionalInformation.map(information => (<li>{information}</li>))} */}
                          <li>51-100 employee</li>
                          <li>5 alumni</li>
                          <li>Information Technology</li>
                        </div>
                      </div>
                    </div>
                  </div>
              <Divider/>
            </div>
            <div className={styles.div3}>
              <div className={styles["div3-1"]}>
                <Button color="blue">Apply Now</Button>
              </div>
              <div className={styles["div3-2"]}>
                <div className={styles["div3-2-1"]}>
                  <input type="checkbox" />
                  <span>View More</span>
                  <i className={`angle down icon ${styles.arrowDown}`}></i>
                </div>
                <div className={styles["div3-2-2"]}>
                  <Icon 
                    name={this.state.isBookmarked ? "bookmark" : "bookmark outline"}
                    onClick={this.handleToggleBookmark}
                  />
                </div>
              </div>
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
  imginfo: PropTypes.string,
  workDespription: PropTypes.string,
  skillsRequired: PropTypes.array,
  additionalInformation: PropTypes.array
}
