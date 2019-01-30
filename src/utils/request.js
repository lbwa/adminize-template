import axios from 'axios'
import { tokenFromStorage } from 'UTILS/storage'
// import store from 'STORE'

/**
 * @description 创建一个 axios 基础请求实例，提示，环境变量可在 .env.[mode] files 中定义
 * @param {String} baseURL 基础请求路径
 */
export default function createBaseRequest (baseURL) {
  if (!baseURL) throw new Error('[createRequestBase]: Wrong baseURL type !')

  const request = axios.create({
    baseURL,
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
    // 1.1. access_token 过期
    if (data.code === 3000) {
      // 触发 router 的 beforeEach 导航守卫中的 token 检测并重定向至 login 页
      tokenFromStorage.setItem('')
      // 以下 action 用于用户登出，并重置 vuex 状态
      return Promise.reject(data)
      // return store.dispatch('login/userLogout')
      //   .then(() => Promise.reject(data))
    }
    // 1.2 登录失败
    if (data.code === 5000) {
      return Promise.reject(data)
    }
    // 2. 其他错误
    // ! 除非知道确切的错误 code，否则应谨慎处理其他非确定 code
    // ! 如响应二进制下载数据时，正确的二进制数据将被 reject
    // if (data.code !== 2000 && data.code !== 3000) {
    //   return Promise.reject(data)
    // }
    // 3. 正常响应
    return data
  }, err => {
    err && console.error(`[Response error]: ${err}`)
    return Promise.reject(err)
  })

  return request
}
