import React, { Component } from 'react'
import styles from './error.css'

class ErrorPage extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div id={styles.notfound}>
        <div className={styles.notfound}>
          <div className={styles.notfound - 404}>
            <h1>:(</h1>
          </div>
          <h2>404 - Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <a href="/">home page</a>
        </div>
      </div>
    )
  }
}
export default ErrorPage
