import url from 'url'

export function removeUndefinedProps(object) {
  const newObject = {}
  Object.keys(object).forEach((key) => {
    if (typeof object[key] !== 'undefined') {
      newObject[key] = object[key]
    }
  })
  return newObject
}

export function addQueryParams(urlString, queryParams) {
  const urlObj = url.parse(urlString, true)
  urlObj.query = removeUndefinedProps({ ...urlObj.query, ...queryParams })
  return url.format(urlObj)
}
