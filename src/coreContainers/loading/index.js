import React, { Component } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

class loader extends Component {
  render() {
    return (
      <div className="loader">
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    )
  }
}

export default loader
