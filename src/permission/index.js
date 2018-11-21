import router from 'ROUTER'
import store from 'STORE'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getTokenFromLocal } from 'UTILS/storage'

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

  if (getTokenFromLocal()) { // User has been logged in
    store.dispatch('login/fetchDynamicRoutes')
      .then(routes => store.dispatch('login/createGlobalRoutes', routes))
      .catch(console.error)
      .finally(() => next())
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
