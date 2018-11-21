import { userLogin, fetchDynamicRoutes } from 'API'
import { setTokenToLocal, removeTokenFromLocal } from 'UTILS/storage'
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
        setTokenToLocal(res.access_token)
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
    removeTokenFromLocal()
  },
  fetchDynamicRoutes ({ commit, dispatch, state }) {
    return fetchDynamicRoutes({
      username: state.username,
      accessToken: state.accessToken
    })
      .then(({ routes }) => {
        commit(types.SET_DYNAMIC_ROUTES, routes)
        commit(types.SET_ALL_ROUTES)
      })
  }
}
