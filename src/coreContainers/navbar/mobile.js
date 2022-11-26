
import React, { useState, useEffect} from 'react';
import styles from './mobile.css'
import { Link } from 'react-router-dom'
export const HeaderMobile = () => {
  const [isCA, setIsCA] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('userRoleType') === 'CA') setIsCA(true);
    return () => {
      setIsCA(false);
    };
  }, []);
  return (
    <div className={styles.mobileNavbarMajorContainer}>
      <input type='checkbox' />

      <div className={styles.Hamburger}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
      <Link to='/' className={styles.image} >
        <img
          src=''
          alt='navbar-logo'
          className={styles.navbarLogoMobile}
        />
      </Link>
      <ul className={styles.mobilenavMenuSubcontent1}>
        <li className={styles.mobilenavMenuItems}>
          <Link to='/' >
            <div className={styles.mobilenavMenu}>HOME</div>
          </Link>
        </li>
        {
          <li className={styles.mobilenavMenuItems}>
            <Link to='/team' >
              <div className={styles.mobilenavMenu}>TEAM</div>
            </Link>
          </li>
        }
        <li className={styles.mobilenavMenuItems}>
          <Link to='/events' >
            <div  className={styles.mobilenavMenu}>EVENTS</div>
          </Link>
        </li>
        <li className={styles.mobilenavMenuItems}>
          <Link to='/speakers' >
            <div className={styles.mobilenavMenu}>SPEAKERS</div>
          </Link>
        </li>
        <li className={styles.mobilenavMenuItems}>
          <Link to='/sponsors' >
            <div className={styles.mobilenavMenu}>SPONSORS</div>
          </Link>
        </li>
        <li className={styles.mobilenavMenuItems}>
          <Link to='/#faq' >
            <div className={styles.mobilenavMenu}>FAQ</div>
          </Link>
        </li>
        {isCA && (
          <>
            <li className={styles.mobilenavMenuItems}>
              <Link to='/cap/tasks' >
                <div className={styles.mobilenavMenu}>
                  CAMPUS AMBASSADOR
                </div>
              </Link>
            </li>
            <li className={styles.mobilenavMenuItems}>
              <Link to='/cap/tasks' >
                <div className={styles.mobilenavMenu}>TASKS</div>
              </Link>
            </li>
            <li className={styles.mobilenavMenuItems}>
              <Link to='/cap/leaderboard' >
                <div className={styles.mobilenavMenu}>LEADERBOARD</div>
              </Link>
            </li>
            <li className={styles.mobilenavMenuItems}>
              <Link to='/cap/resources' >
                <div className={styles.mobilenavMenu}>CA RULEBOOK</div>
              </Link>
            </li>
          </>
        )}
        
      </ul>
    </div>
  );
};

export default HeaderMobile;