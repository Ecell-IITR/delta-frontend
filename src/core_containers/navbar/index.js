import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import Searchbar from '../searchbar/index'
import ImageIndex from '../image/index'
import styles from '../css/navbar.module.css'
import PropTypes from 'prop-types'
class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbar}>
        <div className={styles.startnav}>
          <div className={styles.title}>DELTA</div>
          <div className={styles.searchBar}>
            <Searchbar />
          </div>
        </div>
        <div className={styles.subnavbar}>
          <ul>
            <li>
              <Link to="/student/profile">Profile</Link>
            </li>
            <li>
              <Link to="/student/opportunities">Opportunities</Link>
            </li>
            <li>
              <Link to="/">Create Post</Link>
            </li>
            <li>
              <Link to="/">More</Link>
            </li>
            <li>
              <Link to="/">
                <Icon name="bell" />
              </Link>
            </li>
            <li>
              <ImageIndex
                image="https://3.bp.blogspot.com/-iRUC5QuV8Bc/XM8aQxSkntI/AAAAAAAAB64/k4Dcl-z0GhYjP7oHUUPO5XsSw3tWeyNlgCEwYBhgL/s1600/summer_of_code_15yrs_square_PS_400px_RGB.png"
                size="mini"
                shape="circular"
                className={styles.profilepic}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
Navbar.propTypes = {
  profile: PropTypes.string.isRequired,
  opportunities: PropTypes.string.isRequired,
  createpost: PropTypes.string.isRequired,
  notification: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
  profilepic: PropTypes.string.isRequired
}

export default Navbar
