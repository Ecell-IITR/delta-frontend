/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import illustration from '../../images/empty.svg'

import styles from './index.css'

export default class EmptyScreen extends Component {
  render() {
    const { text } = this.props
    return (
      <div className={styles['empty-screen-container']}>
        <div
          className={styles['empty-screen-image']}
          style={{ backgroundImage: `url(${illustration})` }}
        ></div>
        <div className={styles['empty-screen-text']}>
          Oops... It&apos;s empty here.
          <br />
          {text || 'Try editing other filter options.'}
        </div>
      </div>
    )
  }
}

EmptyScreen.propTypes = {
  text: PropTypes.string,
}
