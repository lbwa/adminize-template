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
  if (getTokenFromLocal()) {
    store.dispatch('login/fetchDynamicRoutes').catch(console.error)
  }

  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
