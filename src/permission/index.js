import router from 'ROUTER'
import store from 'STORE'
import loginTypes from 'STORE/modules/login/mutations/types'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getTokenFromLocal } from 'UTILS/storage'
import { MessageBox } from 'element-ui'
import createDynamicRoutes from './create-routes'
import constantRoutes from 'ROUTER/routes/constant'

NProgress.configure({ showSpinner: false })

const WHITELIST = [
  '/login'
]

// Used to determine whether private routes has been added
let HAS_ROUTES_ADDED = false

function setDynamicRoutesToStorage (roles) {
  const currentRole = Array.isArray(roles) ? roles[0] : roles
  store.commit(
    `login/${loginTypes.SET_DYNAMIC_ROUTES}`,
    createDynamicRoutes(currentRole)
  )
}

function setGlobalRoutesToStorage () {
  store.commit(`login/${loginTypes.SET_ALL_ROUTES}`, [
    ...constantRoutes,
    ...store.getters['login/dynamicRoutes']
  ])
}

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

function routesAddToRouter () {
  router.addRoutes(store.getters['login/dynamicRoutes'])
  console.log(
    '%c[Routes creation]: routes has been added!', 'color: yellow',
    store.getters['login/dynamicRoutes']
  )
}

function createAllRoutes (to, redirectPath, next) {
  return store.dispatch(
    'login/fetchUserAccess',
    getTokenFromLocal()
  )
    .then(setDynamicRoutesToStorage)
    .then(setGlobalRoutesToStorage)
    .then(() => routesAddToRouter())
    .catch(e => errorHandler(e, next, redirectPath))
    // 1. MUST invoke `next({ ...to, replace: true })` to prevent route matching
    // from occurring before route is added
    // 2. use `to` route to replace routes occurring before private routes is added
    .finally(() => {
      HAS_ROUTES_ADDED = true
      next({ ...to, replace: true })
    })
}

/**
 * @description Login state validation
 */
router.beforeEach((to, from, next) => {
  NProgress.start()

  // Jump to target path directly If target path has been included by white list
  if (WHITELIST.includes(to.path)) {
    return next()
  }

  // ! State: User has been logged in (local token).
  if (getTokenFromLocal()) {
    // 1. fetch RolesMap if necessary (when RolesMap stored by back-end)

    // 2. confirm route access by user role, including global routes creation.
    if (!store.getters['login/role']) {
      // 2.1 fetch user role, then routes creation based on user role.
      return createAllRoutes(to, to.path, next)
    }

    // (2.2 optional) re-create private routes based on user role when page
    // reload.
    if (store.getters['login/role'] && !HAS_ROUTES_ADDED) {
      setDynamicRoutesToStorage(store.getters['login/role'])
      setGlobalRoutesToStorage()
      routesAddToRouter()
      HAS_ROUTES_ADDED = true
      console.log(
        '%c[Routes creation]: Private routes has been regenerated !',
        'color: yellow;'
      )
      // 1. MUST invoke `next({ ...to, replace: true })` to prevent route
      // matching from occurring before route is added
      // 2. use `to` route to replace routes occurring before private routes is added
      return next({ ...to, replace: true })
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
