/* eslint-disable no-param-reassign */
import axios from 'axios'

const FetchApi = (method, url, params, TokenValue) => {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'production') {
      url = 'https://delta-api.ecelliitr.org' + url
    }
    if (TokenValue) {
      axios({
        method,
        url,
        data: params,
        headers: {
          Authorization: 'Token ' + TokenValue,
        },
        responseType: 'json',
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    } else {
      axios({
        method,
        url,
        data: params,
        responseType: 'json',
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err))
    }
  })
}

export default FetchApi
