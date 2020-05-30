import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from '@material-ui/core/Slider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    'fontSize': '0.8rem',
    'fontFamily': 'Neutrifpro-regular',
  }
});

export class RangeFilter extends Component {
  valueText = (value) => `${value}`
  render() {
    const { value, handleChange, minValue, maxValue } = this.props
    const marks = [
      {
        value: minValue,
        label: `${minValue}`,
      },
      {
        value: maxValue / 4,
        label: `${maxValue / 4}`,
      },
      {
        value: maxValue / 2,
        label: `${maxValue / 2}`,
      },
      {
        value: 3 * maxValue / 4,
        label: `${3 * maxValue / 4}`,
      },
      {
        value: maxValue,
        label: `${maxValue}`,
      },
    ];
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
  value: PropTypes.string
}
