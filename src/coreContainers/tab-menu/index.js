/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

export default class TabMenu extends Component {
  render() {
    const { tabItems, currentTab, handleClick } = this.props
    return (
      <div className={styles['menu-container']}>
        {tabItems.map((item) => (
          <div
            className={styles['tab-box']}
            onClick={() => handleClick(item.slug)}
            style={
              currentTab === item.slug
                ? {
                  borderBottom: '2px solid #2964ee',
                  color: '#2964ee',
                  width: `${100 / tabItems.length}%`,
                }
                : {
                  width: `${100 / tabItems.length}%`,
                }
            }
            key={item.slug}
          >
            {item.title}
          </div>
        ))}
      </div>
    )
  }
}
TabMenu.propTypes = {
  tabItems: PropTypes.array,
  currentTab: PropTypes.string,
  handleClick: PropTypes.func,
}
