import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'semantic-ui-react'

class ImageIndex extends Component {
  render() {
    const { image, size, shape } = this.props
    return (
      <div>
        <Image src={image} size={size} circular={shape === 'circular'} />
      </div>
    )
  }
}

ImageIndex.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  shape: PropTypes.string,
}

export default ImageIndex
