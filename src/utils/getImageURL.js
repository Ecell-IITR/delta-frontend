const PROXY_PORT = process.env.PROXY_PORT || 8000

export const getImageURL = (path) => {
  if (process.env.NODE_ENV === 'production') {
    return `https://delta.ecelliitr.org${path}`
  }
  return `http://localhost:${PROXY_PORT}${path}`
}
