export const makeArrayCopy = (originalArr) => {
  const copyArr = []
  for (let i = 0, len = originalArr.length; i < len; i += 1) {
    copyArr[i] = {}
    Object.keys(originalArr[i]).forEach((key) => {
      copyArr[i][key] = originalArr[i][key]
    })
  }
  return copyArr
}
