import {
  DAY_UNIT,
  DAY_UNIT_TEXT,
  WEEK_UNIT,
  WEEK_UNIT_TEXT,
  MONTH_UNIT,
  MONTH_UNIT_TEXT,
} from 'globalConstants'

export const getDurationUnit = (unit) => {
  switch (unit) {
    case DAY_UNIT:
      return DAY_UNIT_TEXT
    case WEEK_UNIT:
      return WEEK_UNIT_TEXT
    case MONTH_UNIT:
      return MONTH_UNIT_TEXT
    default:
      return ''
  }
}
