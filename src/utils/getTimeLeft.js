export const getTimeLeft = (date) => {
  const dateObj = new Date(date)
  let timeBetweenType = 'week'
  let timeBetween = (dateObj - Date.now()) / (7 * 24 * 60 * 60 * 1000)
  if (timeBetween < 1) {
    timeBetween *= 7
    timeBetweenType = 'day'
  }
  return `${
    Math.round(timeBetween) > 1
      ? `${Math.round(timeBetween)} ${timeBetweenType}s`
      : `${Math.round(timeBetween)} ${timeBetweenType}`
  }`
}
