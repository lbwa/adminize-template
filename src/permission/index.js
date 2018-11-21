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
  if (WHITELIST.includes(to.path)) {
    next()
    return
  }

  // fetching user private routes
  if (getTokenFromLocal()) { // User has been logged in
    store.dispatch('login/fetchDynamicRoutes')
      .then(routes => store.dispatch('login/createGlobalRoutes', routes))
      .then(() => next())
      .catch(e => {
        MessageBox({
          title: 'Error',
          message: 'We got a error when fetching user access.',
          type: 'error'
        })
          .then(() => next({
            path: `/login?redirect=${from.path}`,
            replace: true
          }))
        NProgress.done()
        console.error(e)
      })
  } else {
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
