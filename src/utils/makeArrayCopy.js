export const makeArrayCopy = (originalArr) => {
  let copyArr = []
  for (let i = 0, len = originalArr.length; i < len; i++) {
    copyArr[i] = {}
    for (let prop in originalArr[i]) {
      copyArr[i][prop] = originalArr[i][prop]
    }
  }
  return copyArr
}
