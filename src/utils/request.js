import axios from 'axios'
import { tokenFromStorage } from 'UTILS/storage'

const request = axios.create({
  // Env variables is defined by .env.[mode] files.
  baseURL: process.env.VUE_APP_BASE_REQUEST,
  timeout: 10000
})

request.interceptors.request.use(req => {
  req.headers['content-type'] = 'application/json'
  req.headers['app_key'] = process.env.VUE_APP_KEY
  req.headers['app_secret'] = process.env.VUE_APP_SECRET

  const token = tokenFromStorage.getItem()
  if (token) req.headers['access_token'] = token

  return req
}, err => {
  err && console.error(`[Request error]: ${err}`)
  return Promise.reject(err)
})

request.interceptors.response.use(({ data }) => {
  return data.code !== 2000
    ? Promise.reject(data)
    : data
}, err => {
  err && console.error(`[Response error]: ${err}`)
  return Promise.reject(err)
})

export default request
