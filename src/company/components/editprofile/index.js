import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './styles.css'

class EditProfile extends Component {
  render() {
    return (
      <div className={styles.flexcontainer}>
        <div className={styles.editDiv}>
          <h2>Edit</h2>
        </div>
        <div className={styles.formcontainer}>
          <Form size="large">
            <div className={styles.formchilds}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  width={1}
                  label="Domain name"
                  placeholder="Enter Domain Name"
                />
                <Form.Input
                  fluid
                  width={1}
                  label="Category Of Organisation"
                  placeholder="Enter Company Category"
                />
              </Form.Group>
            </div>
            <div className={styles.formchilds}>
              <Form.TextArea
                style={{ minHeight: 150 }}
                label="Organisation Description"
                placeholder="Enter Description of Organisation"
              />
            </div>
            <div className={styles.formchilds}>
              <Link to="#" className={styles.linkStyles}>
                Social Links
              </Link>
            </div>
            <div className={styles.formchilds}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  className={styles.inputstyles}
                  label="Website name"
                  placeholder="Enter Website Name"
                />
                <Form.Input
                  fluid
                  className={styles.inputstyles}
                  label="Url"
                  placeholder="Enter Website Url"
                />
              </Form.Group>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default EditProfile
