import { constantComponents, plainExport } from 'ROUTER/components'
import permission from 'PERMISSION/rolesMap'

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
    path: '/404',
    component: constantComponents.pagesNotFound
  }
]
