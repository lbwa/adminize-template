import Vue from 'vue'
import Router from 'vue-router'
import { constantComponents } from './components'
import permission from 'PERMISSION/rolesMap'

const plainExport = () => import('COMPONENTS/RouteExport')

Vue.use(Router)

console.log('constantComponents :', constantComponents)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: constantComponents.pagesHome
  },
  {
    path: '/login',
    name: 'login',
    component: constantComponents.pagesLogin,
    meta: {
      layout: 'plain'
    }
  },
  {
    path: '/admin',
    component: plainExport,
    children: [
      {
        path: 'dashboard',
        component: constantComponents.pagesAdminDashboard,
        meta: {
          roles: permission.admin.dashboard
        }
      },
      {
        path: 'table',
        component: constantComponents.pagesAdminTable,
        meta: {
          roles: permission.admin.table
        }
      }
    ]
  },
  {
    path: '/common',
    component: plainExport,
    children: [
      {
        path: 'user',
        component: constantComponents.pagesCommonUser
      }
    ]
  },
  {
    path: '/access',
    name: 'access',
    component: plainExport,
    children: [
      {
        path: 'admin',
        component: constantComponents.pagesAccess,
        meta: {
          roles: permission.access.admin
        }
      },
      {
        path: 'user',
        component: constantComponents.pagesAccess,
        meta: {
          roles: permission.access.user
        }
      }
    ]
  },
  {
    path: '/404',
    component: constantComponents.pagesNotFound
  },
  {
    path: '*',
    redirect: '/404'
  }
]

/**
 * ! NOTICE
 * This router instance should not be added directly without
 * `PERMISSION/index` processing.
 */
export default new Router({
  routes: constantRoutes
})
