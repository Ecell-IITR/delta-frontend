/* eslint-disable react/button-has-type */
import React from 'react'
import channeliLogo from '../../../images/channeli-logo.svg'

import styles from './index.css'

export function ChanneliOauthButton() {
  return (
    <a
      href={`https://internet.channeli.in/oauth/authorise/?client_id=${process.env.REACT_APP_DELTA_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_DELTA_REDIRECT_URI}/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type="button" className={styles['channeli-oauth-button']}>
        <span>Login with</span>
        <span>
          <img
            className={styles['channeli-logo']}
            src={channeliLogo}
            alt="Channeli"
          />
        </span>
        <span className={styles['channeli-text']}>Channeli</span>
      </button>
    </a>
  )
}

export default ChanneliOauthButton
