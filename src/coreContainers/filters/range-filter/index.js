import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from '@material-ui/core/Slider'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { kFormatter } from 'utils/numberFormatter'

const THEME = createMuiTheme({
  typography: {
    fontSize: '0.8rem',
    fontFamily: 'Neutrifpro-regular',
    color: '#5a5c74',
  },
  overrides: {
    MuiSlider: {
      thumb: {
        color: '#2964ee',
      },
      track: {
        color: '#2964ee',
      },
      rail: {
        color: '#bdc0c0',
      },
    },
  },
})

export class RangeFilter extends Component {
  valueText = (value) => `${kFormatter(value)}`

  render() {
    const { value, handleChange, minValue, maxValue } = this.props
    const marks = [
      {
        value: minValue,
        label: `${kFormatter(minValue)}`,
      },
      {
        value: maxValue / 4,
        label: `${kFormatter(maxValue / 4)}`,
      },
      {
        value: maxValue / 2,
        label: `${kFormatter(maxValue / 2)}`,
      },
      {
        value: (3 * maxValue) / 4,
        label: `${kFormatter((3 * maxValue) / 4)}`,
      },
      {
        value: maxValue,
        label: `${kFormatter(maxValue)}`,
      },
    ]
    return (
      <MuiThemeProvider theme={THEME}>
        <Slider
          value={value}
          onChange={(e, value) => handleChange(value)}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={this.valueText}
          min={minValue}
          max={maxValue}
          marks={marks}
        />
      </MuiThemeProvider>
    )
  }
}

RangeFilter.propTypes = {
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  handleChange: PropTypes.func,
  value: PropTypes.string,
}
