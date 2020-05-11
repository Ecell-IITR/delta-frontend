import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

import styles from './index.css'

export class SelectFilter extends Component {
  render() {
    const { value, handleChange, options, isMulti, loading, placeholder } = this.props
    return (
      <Select
        value={value}
        onChange={handleChange}
        options={options}
        isMulti={isMulti}
        isLoading={loading}
        placeholder={placeholder}
        isClearable
      />
    )
  }
}

SelectFilter.propTypes = {
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  isMulti: PropTypes.bool,
  options: PropTypes.array,
  handleChange: PropTypes.func,
  value: PropTypes.string
}
