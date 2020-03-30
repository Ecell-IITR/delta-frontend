import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import '../css/onboarding.css'

class onBoarding2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    let files = e.target.files

    let reader = new FileReader()
    reader.readAsDataURL(files[0])

    reader.onload = e => {
      this.props.dispatch({
        action: 'ADD_PROFILE_RESUME_FILE',
        payload: e.target.result
      })
    }
  }
  render() {
    return (
      <div className="onboarding2">
        <Header className="question" as="h1">
          Select Resume file to Upload
        </Header>
        <div className="onboarding2File">
          <label className="labelUploadFile" htmlFor="uploadFile">
            <div></div>
            Select File
          </label>
          <input
            id="uploadFile"
            name="file"
            onChange={this.handleChange}
            type="file"
          />
        </div>
      </div>
    )
  }
}

onBoarding2.propTypes = {
  dispatch: PropTypes.func
}

export default connect(null, null)(onBoarding2)
