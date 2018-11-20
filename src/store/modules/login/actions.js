import { userLogin } from 'API'
import types from './mutations/types'

export default {
  userLogin ({ commit }, { username, password, vm }) {
    return userLogin({
      username,
      password
    })
      .then(res => {
        commit(types.SET_USERNAME, username)
        commit(types.SET_ACCESS_TOKEN, res.access_token)
        vm.$router.replace('/')
      })
      .catch(e => {
        if (e.code === 5000) {
          vm.$messageBox({
            title: '错误',
            message: '用户名或密码错误',
            type: 'error'
          })
        }
        console.error(`[Login error]: ${e.code}, ${e.msg}`)
      })
  }
}
