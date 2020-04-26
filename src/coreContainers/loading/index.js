import React, { Component } from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

class loader extends Component {
  state = {
    loading: true,
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 3000)
  }

  render() {
    return (
      <div className="loader">
        {this.state.loading ? (
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        ) : (
          'Content'
        )}
      </div>
    )
  }
}

export default loader
