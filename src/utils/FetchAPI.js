import axios from 'axios'

const FetchApi = (method, url, params, TokenValue) => {
  return new Promise((resolve, reject) => {
    if (TokenValue) {
      axios({
        method,
        url,
        data: params,
        headers: {
          Authorization: 'JWT ' + TokenValue,
        },
        responseType: 'json',
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
    } else {
      axios({
        method,
        url,
        data: params,
        responseType: 'json',
      })
        .then(res => resolve(res))
        .catch(err => reject(err))
    }
  })
}

export default FetchApi
