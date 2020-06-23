/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { notify } from 'react-notify-toast'
import { NOTIF_SUCCESS_TYPE } from 'globalConstants'
import Loader from 'coreContainers/loading'
import { channeliOAuthLogin } from '../actions'

export function ChanneliComponent({
  channeliOAuthLoginComponent,
  history,
  isAuthenticating,
  location,
}) {
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    if (searchParams && searchParams.get('code')) {
      channeliOAuthLoginComponent(searchParams.get('code'), (status) => {
        if (status === 200) {
          notify.show('Successfully logged in!', NOTIF_SUCCESS_TYPE, 1000)
          history.push('/opportunities')
        }
      })
    }
  }, [])
  return <>{isAuthenticating ? <Loader /> : <></>}</>
}

ChanneliComponent.propTypes = {
  channeliOAuthLoginComponent: PropTypes.func,
  isAuthenticating: PropTypes.bool,
  history: PropTypes.object,
  location: PropTypes.object,
}

function mapDispatchToProps(dispatch) {
  return {
    channeliOAuthLoginComponent: (code, callback) => {
      dispatch(channeliOAuthLogin(code, callback))
    },
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticating: state.auth.isAuthenticating,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChanneliComponent)
