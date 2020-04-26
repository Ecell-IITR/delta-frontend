import {
  SERVER_ERROR,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
} from 'globalConstants'

export const getErrorMsg = (error) => {
  if (error && error.response) {
    const { status } = error.response
    switch (status) {
      case 400:
        return BAD_REQUEST
      case 401:
        return UNAUTHORIZED
      case 403:
        return FORBIDDEN
      case 404:
        return NOT_FOUND
      default:
        return SERVER_ERROR
    }
  }
  return SERVER_ERROR
}
