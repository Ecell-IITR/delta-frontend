/* eslint-disable react/forbid-prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TOKEN_TYPE } from 'globalConstants'
// import logo from '../../images/logo.svg'
// import Searchbar from '../searchbar/index'

import styles from './navbar.css'
// import PropTypes from 'prop-types'
class Navbar extends React.PureComponent {
  render() {
    const { user, location } = this.props
    const activeRoute = location.pathname
    const isLoggedIn = localStorage.getItem(TOKEN_TYPE)
    return isLoggedIn ? (
      <div className={styles.navbar}>
        <div className={styles.startnav}>
          <div className={styles.title}>Delta</div>
          {/* <div>
            <img src={logo} className={styles.logo} alt="logo" />
          </div> */}
          {/* <div className={styles.searchBar}>
            <Searchbar />
          </div> */}
        </div>
        <div className={styles.subnavbar}>
          <ul>
            <li
              className={
                activeRoute.includes('/opportunities')
                  ? styles['active-nav-link']
                  : styles['nav-link']
              }
            >
              <Link to="/opportunities">Opportunities</Link>
            </li>
            <li
              className={
                activeRoute.includes('/user')
                  ? styles['active-nav-link']
                  : styles['nav-link']
              }
            >
              {user && user.username ? (
                <Link to={`/user/${user.username}`}>Profile</Link>
              ) : (
                <></>
              )}
            </li>
            <li
              className={
                activeRoute.includes('/create-post')
                  ? styles['active-nav-link']
                  : styles['nav-link']
              }
            >
              <Link to="/create-post">Create Post</Link>
            </li>
            {/* <li>
              <Link to="/">More</Link>
            </li> */}
            {/* <li>
              <Link to="/">
                <Icon name="bell" />
              </Link>
            </li> */}
            <li className={styles['nav-link']}>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <img
                src={user.profileImage}
                className={styles['profile-pic']}
                alt="profile"
              />
            </li>
          </ul>
        </div>
      </div>
    ) : (
      <></>
    )
  }
}

Navbar.propTypes = {
  user: PropTypes.object,
  location: PropTypes.object,
}

function mapStateToProps(state) {
  return {
    user: state.student.user.user,
  }
}

export default connect(mapStateToProps, null)(Navbar)
