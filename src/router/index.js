import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './routes/constant'

Vue.use(Router)

function createRouter() {
  return new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })
}

const router = createRouter()

/**
 * @description to implement addRoutes resetting
 * @ref https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
 */
export function resetRouter() {
  router.matcher = createRouter().matcher
}

/**
 * ! NOTICE
 * This router instance should not be added directly without
 * `PERMISSION/index` processing.
 */
export default router
