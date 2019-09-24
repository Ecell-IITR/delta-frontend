import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: null,
      options: this.props.options,
      isMulti: false || props.isMulti
    }
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption })
    this.props.handleChange(selectedOption)
    // this.props.refresh(selectedOption)
    //console.log(`Option selected:`, selectedOption)
  }

  render() {
    const { options } = this.state
    const { name, isMulti } = this.props
    return (
      <Select
        name={name}
        value={''}
        onChange={this.handleChange}
        options={options}
        isMulti={isMulti}
      />
    )
  }
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isMulti: PropTypes.bool,
  refresh: PropTypes.func
}
export default Dropdown
