import { constantComponents, plainExport } from 'ROUTER/components'
import permission from 'PERMISSION/roles-map'

/**
 * meta: {
 *   title: 'route title', // Route will be hidden if meta.title is falsy value
 *   icon: '', // title text icon name
 *   layout: '', // layout name, 'plain' or 'material'(default value)
 *   roles: ['admin', 'user'] // current route access
 * }
 */
export default [
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
    meta: {
      title: 'Admin'
    },
    children: [
      {
        path: 'dashboard',
        component: constantComponents.pagesAdminDashboard,
        meta: {
          title: 'Dashboard',
          roles: permission.admin.dashboard
        }
      },
      {
        path: 'table',
        component: constantComponents.pagesAdminTable,
        meta: {
          title: 'Table',
          roles: permission.admin.table
        }
      }
    ]
  },
  {
    path: '/common',
    component: plainExport,
    meta: {
      title: 'Common'
    },
    children: [
      {
        path: 'user',
        component: constantComponents.pagesCommonUser,
        meta: {
          title: 'User'
        }
      }
    ]
  },
  {
    path: '/403',
    component: constantComponents.pagesErrorUnauthorized
  },
  {
    path: '/404',
    component: constantComponents.pagesErrorNotFound
  }
]
