import React, { Component } from 'react';
import PropsTypes from "prop-types"
import { Image } from "semantic-ui-react"
class ImageIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
            let { image, size, shape } = this.props
        return ( 
            <div>
                <Image
                    src={image}
                    size={size}
                    circular={shape === 'circuar' ? true : false }
                />
            </div>
         );
    }
}

ImageIndex.propTypes={
    image: PropTypes.string.required,
    size: PropsTypes.string.required,
    shape: PropTypes.string
}
 
export default ImageIndex;