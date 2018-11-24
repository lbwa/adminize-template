import router from 'ROUTER'
import store from 'STORE'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getTokenFromLocal } from 'UTILS/storage'
import { MessageBox } from 'element-ui'

NProgress.configure({ showSpinner: false })

const WHITELIST = [
  '/login'
]

/**
 * @description Login state validation
 */
router.beforeEach((to, from, next) => {
  NProgress.start()

  // Jump to target path directly If target path has been included by white list
  // or common routes
  // if (WHITELIST.includes(to.path) || !to.meta.roles) {
  if (WHITELIST.includes(to.path)) {
    return next()
  }

  // ! State: User has been logged in.
  if (getTokenFromLocal()) {
    // 1. fetch rolesMap if necessary (when rolesMap stored by back-end)

    // 2. confirm route access by user role
    if (!store.getters['login/role']) {
      // 2.1 No roles: fetch user role
      return store.dispatch(
        'login/fetchUserAccess',
        store.getters['login/username']
      )
        .catch(e => errorHandler(e, next, to.path))
        .finally(() => next())
    }

    // 2.2 filter route
    if (!to.meta.roles ||
      to.meta.roles.includes(store.getters['login/role'][0])) {
      next()
    } else {
      next({
        path: `/403?redirect=${to.path}`,
        replace: true
      })
    }
  } else {
    // ! State: user logout
    next({
      path: `/login?redirect=${to.path}`,
      replace: true
    })
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router

function errorHandler (e, next, redirectPath) {
  MessageBox({
    title: 'Error',
    message: 'We got a error when fetching user access.',
    type: 'error',
    showClose: false
  })
    .then(() => store.dispatch('login/userLogout'))
    .then(() => next({
      path: `/login?redirect=${redirectPath}`,
      replace: true
    }))
  NProgress.done()
  console.error(e)
}
