import React from 'react'
import { Link } from 'react-router-dom'

import styles from './mobile.css'

export const HeaderMobile = (user) => {
  return (
    <div className={styles.mobileNavbarMajorContainer}>
      <input type="checkbox" />

      <div className={styles.Hamburger}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
      <Link to="/" className={styles.image}>
        <div className={styles.title + ' ' + styles.titleRespon}>Delta</div>
      </Link>
      <ul className={styles.mobilenavMenuSubcontent1}>
        <li className={styles.mobilenavMenuItems}>
          <Link to="/opportunities">
            <div className={styles.mobilenavMenu}>Opportunities</div>
          </Link>
        </li>
        <li className={styles.mobilenavMenuItems}>
          <Link to={`/user/${user.username}`}>
            <div className={styles.mobilenavMenu}>Profile</div>
          </Link>
        </li>
        <li className={styles.mobilenavMenuItems}>
          <Link to="/create-post">
            <div className={styles.mobilenavMenu}>Create Post</div>
          </Link>
        </li>
        <li className={styles.mobilenavMenuItems}>
          <Link to="/logout">
            <div className={styles.mobilenavMenu}>Logout</div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HeaderMobile
