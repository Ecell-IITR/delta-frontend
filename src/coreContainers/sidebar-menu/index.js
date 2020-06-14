/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './index.css'

export default class SidebarMenu extends Component {
  render() {
    const { rowItems, currentTab, handleClick } = this.props
    return (
      <div className={styles['menu-container']}>
        {rowItems.map((item) => (
          <div
            className={styles['row-container']}
            onClick={() => handleClick(item.slug)}
            style={currentTab === item.slug ? { background: '#2964ee' } : null}
            key={item.slug}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={
                currentTab === item.slug
                  ? styles['row-active-icon']
                  : styles['row-icon']
              }
            />
            <span
              className={styles['row-title']}
              style={currentTab === item.slug ? { color: '#f5f6f9' } : null}
            >
              {item.title}
            </span>
          </div>
        ))}
      </div>
    )
  }
}
SidebarMenu.propTypes = {
  rowItems: PropTypes.array,
  currentTab: PropTypes.string,
  handleClick: PropTypes.func,
}
