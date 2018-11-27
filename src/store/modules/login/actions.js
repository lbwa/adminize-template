import { userLogin, fetchUserAccess, fetchDynamicRoutes } from 'API'
import types from './mutations/types'
import router from 'ROUTER'

export default {
  userLogin ({ commit }, { username, password, vm }) {
    return userLogin({
      username,
      password
    })
      .then(res => {
        commit(types.SET_USERNAME, username)
        commit(types.SET_ACCESS_TOKEN, res.access_token)
        vm.toggleLoading(false)
        vm.$router.replace('/home')
      })
      .catch(e => {
        if (e.code === 5000) {
          vm.$messageBox({
            title: 'Error',
            message: 'Wrong username or password',
            type: 'error'
          })
        }
        console.error(`[Login error]: ${e.code}, ${e.msg}`)
      })
  },
  userLogout ({ commit }) {
    commit(types.SET_USERNAME, '')
    commit(types.SET_USER_ROLE, '')
    commit(types.SET_ACCESS_TOKEN, '')
    commit(types.SET_DYNAMIC_ROUTES, [])
    commit(types.SET_ALL_ROUTES, [])
  },
  fetchUserAccess ({ commit }, username) {
    return fetchUserAccess({ username })
      .then(({ roles }) => {
        commit(types.SET_USER_ROLE, roles)
        return roles
      })
  },
  fetchDynamicRoutes ({ state }) {
    return fetchDynamicRoutes({
      username: state.username,
      accessToken: state.accessToken
    })
      .then(({ routes }) => routes)
  },
  createGlobalRoutes ({ commit, getters }, routes) {
    commit(types.SET_DYNAMIC_ROUTES, routes)
    commit(types.SET_ALL_ROUTES)
    router.addRoutes(getters.dynamicRoutes)
  }
}
