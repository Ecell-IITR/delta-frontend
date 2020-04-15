import React, { Component } from 'react'
// import SubmitButton from '../../../coreContainers/button/submit'
import FetchAPI from '../../../../utils/FetchAPI'

class uploadResume extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFile: null,
    }
  }

  handleChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    })
  }

  handleUpload = (e) => {
    e.preventDefault()
    if (this.state.selectedFile !== null) {
      const data = new FormData()
      data.append('file', this.state.selectedFile)
      FetchAPI('POST', '/api/v1/upload_resume', data)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  render() {
    return (
      <div className="uploadResume">
        {/* <SubmitButton
          color="white"
          buttonContent="Upload Resume"
          onClick={this.handleUpload}
        /> */}
        <div className="fileInput">
          <input type="file" name="file" onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default uploadResume
