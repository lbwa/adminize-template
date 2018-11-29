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
    '[Routes creation]: routes has been added!',
    store.getters['login/dynamicRoutes']
  )
}

function createAllRoutes (redirectPath, next) {
  return store.dispatch(
    'login/fetchUserAccess',
    store.getters['login/username']
  )
    .then(setDynamicRoutesToStorage)
    .then(setGlobalRoutesToStorage)
    .then(() => routesAddToRouter())
    .catch(e => errorHandler(e, next, redirectPath))
    .finally(() => next())
}

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
    // 1. fetch RolesMap if necessary (when RolesMap stored by back-end)

    // 2. confirm route access by user role, including global routes creation.
    if (!store.getters['login/role']) {
      // 2.1.1 No roles: validate token (Ensure user info)

      // 2.1.2 fetch user role
      return createAllRoutes(to.path, next)
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
