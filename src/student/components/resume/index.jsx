import React, { Component } from 'react'
import Loadable from 'react-loadable'
import { connect } from 'react-redux'
import '../css/resume.css'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const UploadResume = Loadable({
  loader: () => import('./uploadResume'),
  loading: () => <div>Loading ...</div>
})

const ViewResume = Loadable({
  loader: () => import('./viewResume'),
  loading: () => <div>Loading ...</div>
})

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numPages: null,
      pageNumber: 1
    }
  }
  goToPrevPage = () => {
    if (this.state.pageNumber > 1)
      this.setState(state => ({ pageNumber: state.pageNumber - 1 }))
  }
  goToNextPage = () => {
    if (this.state.pageNumber < this.state.numPages)
      this.setState(state => ({ pageNumber: state.pageNumber + 1 }))
  }
  onResumeLoad = ({ numPages }) => {
    this.setState({
      numPages: numPages
    })
  }

  render() {
    const { numPages, pageNumber } = this.state
    console.log(this.props)

    return (
      <div className="resume">
        <div className="content">
          {this.props.file[0] && (
            <div>
              <nav>
                <button onClick={this.goToPrevPage}>Prev</button>
                <button onClick={this.goToNextPage}>Next</button>
              </nav>
              <Document
                // eslint-disable-next-line react/prop-types
                file={this.props.file}
                onLoadSuccess={this.onResumeLoad}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          )}
        </div>
        <div className="optionsBar">
          <ViewResume />
          <UploadResume />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    file: state.studentReducer.resume.file
  }
}

export default connect(
  mapStateToProps,
  null
)(Resume)
