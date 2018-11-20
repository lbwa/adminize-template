import router from 'ROUTER'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getTokenFromLocal } from 'UTILS/storage'

NProgress.configure({ showSpinner: false })

const WHITELIST = [
  '/login'
]

router.beforeEach((to, from, next) => {
  NProgress.start()

  if (WHITELIST.includes(to.path)) {
    next()
    return
  }

  if (getTokenFromLocal()) {}

  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
