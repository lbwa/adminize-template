import { userLogin, fetchDynamicRoutes } from 'API'
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
        vm.$router.replace('/home')
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
  },
  userLogout ({ commit }) {
    commit(types.SET_USERNAME, '')
    commit(types.SET_ACCESS_TOKEN, '')
  },
  fetchDynamicRoutes ({ state }) {
    return fetchDynamicRoutes({
      username: state.username,
      accessToken: state.accessToken
    })
      .then(({ routes }) => routes)
  },
  createGlobalRoutes ({ commit }, routes) {
    commit(types.SET_DYNAMIC_ROUTES, routes)
    commit(types.SET_ALL_ROUTES)
  }
}
