import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { channeliOAuthLogin } from '../actions'
import { notify } from 'react-notify-toast'
import { NOTIF_SUCCESS_TYPE, NOTIF_ERROR_TYPE } from 'globalConstants'
import Loader from 'coreContainers/loading'

export function ChanneliComponent({ channeliOAuthLoginComponent, history, isAuthenticating }) {
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    if (searchParams && searchParams.get('code')) {
      channeliOAuthLoginComponent(searchParams.get('code'), (status) => {
        if (status === 200) {
          console.log('here')
          notify.show('Successfully logged in!', NOTIF_SUCCESS_TYPE, 1000)
          history.push('/opportunities')
        }
      })
    }
  }, [])
  return <>
    {isAuthenticating ? <Loader /> : <></>}
  </>
}

ChanneliComponent.propTypes = {
  channeliOAuthLoginComponent: PropTypes.func,
  isAuthenticating: PropTypes.bool
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
