import { userLogin, fetchUserAccess } from 'API'
import types from './mutations/types'
import router, { resetRouter } from 'ROUTER'

export default {
  userLogin ({ commit }, { username, password, vm }) {
    return (
      userLogin({
        username,
        password
      })
        // eslint-disable-next-line
        .then(({ user_id, access_token }) => {
          commit(types.SET_USER_INFO, {
            username /* 手机或者是邮箱 */,
            userId: user_id
          })
          commit(types.SET_ACCESS_TOKEN, access_token)
          router.replace('/')
        })
        .catch(e => {
          if (e.code === 5000) {
            vm.$_plugins_messageBox.alert('Wrong username or password', {
              type: 'error',
              title: 'Error'
            })
          }
          // 仅用于触发 afterEach 后置导航守卫，使得顶部进度条 done()
          // For invoking `router.afterEach` navigation guards including `NProgress.done()`
          vm.$router.replace('/login')
          console.error(`[Login error]: ${JSON.stringify(e)}`)
        })
    )
  },
  userLogout ({ dispatch }) {
    dispatch('resetStore', null, { root: true })
    // https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
    // remove all routes which was added by router.addRoutes()
    resetRouter()
  },
  fetchUserAccess ({ commit }, token) {
    // ! 预留接口：请求用户的权限集合 roles，用于过滤用户的私有路由
    return fetchUserAccess(token).then(({ accesses }) => {
      commit(types.SET_USER_ACCESSES, accesses)
      return accesses
    })
  }
}
