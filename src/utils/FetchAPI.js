import axios from 'axios'

// const getAPIUrl = url => {
//   let newUrl = ''
//   if (process.env.NODE_ENV === 'development') {
//     return `http://localhost:${process.env.REACT_APP_SERVER_PORT || 8000}${url}`
//   }
//   return newUrl
// }

const FetchApi = (method, url, params, TokenValue) => {
  // url = getAPIUrl(url)
  return new Promise((resolve, reject) => {
    if (TokenValue) {
      axios({
        method: method,
        url: url,
        data: params,
        headers: {
          Authorization: 'JWT ' + TokenValue
        },
        responseType: 'json'
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
    } else {
      axios({
        method: method,
        url: url,
        data: params,
        responseType: 'json'
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
    }
  })
}

export default FetchApi
