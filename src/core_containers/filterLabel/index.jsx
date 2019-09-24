import React, { Component } from 'react'
import Dropdown from '../dropdown/index'
import { Icon } from 'semantic-ui-react'
import '../css/filterLabel.css'

export default class FilterLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      options: this.props.options,
      test1SelectedOption: null,
      selected: []
    }
  }

  test1handleChange = selectedOption => {
    const newArray1 = this.state.selected
    newArray1.push(selectedOption[0].label)
    const newArray2 = this.state.options.filter(item => {
      /*console.log(item)*/
      return item.label !== selectedOption[0].label
    })

    this.setState({
      options: newArray2,
      test1SelectedOption: selectedOption,
      selected: newArray1
    })
  }
  handleClick = item => {
    console.log(item)
    const newArray1 = this.state.options
    newArray1.push({
      label: item,
      value: item
    })
    const newArray2 = this.state.selected.filter(value => {
      return item !== value
    })

    this.setState({
      options: newArray1,
      selected: newArray2
    })
  }

  render() {
    const { options, selected } = this.state
    /*console.log(options)
    console.log(selected)*/
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
          handleChange={this.test1handleChange}
          name="test1"
          isMulti={true}
        />
      </div>
    )
  }
}
