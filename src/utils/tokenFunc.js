// @param: user type is required is every function

export function getToken(userType) {
  return localStorage.getItem(userType)
}

export function hasToken(userType) {
  const token = getToken(userType)
  return !!token
}

export function logout(userType) {
  if (getToken(userType)) {
    localStorage.removeItem(userType)
  }
}

export function setToken(userType, token) {
  localStorage.setItem(userType, token)
}
