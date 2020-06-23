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
  valueText = (value) => `${value}`

  render() {
    const {
      value,
      handleChange,
      maxValue,
      minValue,
      sliderLabel,
      kFormatterBool,
      partitionCount,
    } = this.props
    const marks = []
    marks.push({
      value: minValue,
      label: kFormatterBool
        ? `${kFormatter(minValue)}`
        : `${minValue}${minValue === 0 ? '' : sliderLabel}`,
    })
    for (let i = 0; i < partitionCount; i += 1) {
      const calcValue = ((i + 1) * maxValue) / partitionCount
      marks.push({
        value: calcValue,
        label: kFormatterBool
          ? `${kFormatter(calcValue)}`
          : `${calcValue}${sliderLabel}`,
      })
    }
    return (
      <MuiThemeProvider theme={THEME}>
        <Slider
          value={value}
          onChange={(e, val) => handleChange(val)}
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
  kFormatterBool: PropTypes.bool,
  sliderLabel: PropTypes.string,
  partitionCount: PropTypes.number,
}
