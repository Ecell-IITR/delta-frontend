import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { channeliOAuthLogin } from '../actions'

export function ChanneliComponent({ channeliOAuthLoginComponent }) {
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    if (searchParams && searchParams.get('code')) {
      channeliOAuthLoginComponent(searchParams.get('code'))
    }
  }, [])
  return <></>
}

ChanneliComponent.propTypes = {
  channeliOAuthLoginComponent: PropTypes.func,
}

function mapDispatchToProps(dispatch) {
  return {
    channeliOAuthLoginComponent: (code) => {
      dispatch(channeliOAuthLogin(code))
    },
  }
}

// function mapStateToProps(state) {
//   return {
//   }
// }

export default connect(null, mapDispatchToProps)(ChanneliComponent)
