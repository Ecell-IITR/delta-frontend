import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import searchbar from './searchbar.module.css'
import { itemsFetchData } from '../../student/actions/index'

const initialState = { isLoading: false, results: [], value: '' }

export class SearchBar extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title })
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      this.setState({ results: itemsFetchData() })
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        className={searchbar.core - searchbar}
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        {...this.props.placeholder}
      />
    )
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
}

const mapStateToProps = (state) => ({
  //
})

export default connect(mapStateToProps, { itemsFetchData })(SearchBar)
