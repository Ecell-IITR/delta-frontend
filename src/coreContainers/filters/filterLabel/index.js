import React, { Component } from 'react'
import Dropdown from '../dropdown/index'
import { Icon } from 'semantic-ui-react'
import './filterLabel.css'
import PropTypes from 'prop-types'

export class FilterLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options,
      selectedOption: null,
      selected: [],
    }
  }

  handleChange = (selectedOption) => {
    const { selected, options } = this.state

    const newArray1 = selected
    newArray1.push(selectedOption.label)
    const newArray2 = options.filter((item) => {
      return item.label !== selectedOption.label
    })
    this.props.callback(newArray1)
    this.setState({
      options: newArray2,
      selectedOption,
      selected: newArray1,
    })
  }

  handleClick = (item) => {
    const newArray1 = this.state.options
    newArray1.push({
      label: item,
      value: item,
    })
    const newArray2 = this.state.selected.filter((value) => {
      return item !== value
    })
    this.props.callback(newArray2)
    this.setState({
      options: newArray1,
      selected: newArray2,
    })
  }

  render() {
    const { options, selected } = this.state
    return (
      <div className="filterLabel">
        <div className="filteredLabels">
          {selected.map((item, index) => (
            <div key={index}>
              {item}
              <span onClick={() => this.handleClick(item)}>
                <Icon name="remove circle" />
              </span>
            </div>
          ))}
        </div>
        <Dropdown
          options={options}
          handleChange={this.handleChange}
          name="test1"
          isMulti={false}
        />
      </div>
    )
  }
}

FilterLabel.propTypes = {
  options: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
}
