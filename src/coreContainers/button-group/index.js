/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './index.css'

export default class ButtonGroup extends Component {
  render() {
    const { buttons, currentButton, handleClick } = this.props
    return (
      <div className={styles['button-container']}>
        {buttons.map((button) => (
          <button
            type="button"
            className={styles.button}
            onClick={() => handleClick(button.key)}
            style={
              currentButton === button.key
                ? {
                    background: '#2964ee',
                    border: 'none',
                    color: 'white',
                  }
                : null
            }
            key={button.key}
          >
            {button.title}
          </button>
        ))}
      </div>
    )
  }
}
ButtonGroup.propTypes = {
  buttons: PropTypes.array,
  currentButton: PropTypes.string,
  handleClick: PropTypes.func,
}
