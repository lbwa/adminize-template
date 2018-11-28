import { constantComponents, plainExport } from 'ROUTER/components'
import permission from 'PERMISSION/roles-map'

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    name: 'home',
    component: constantComponents.pagesHome,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: constantComponents.pagesLogin,
    meta: {
      title: 'Login',
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
    component: constantComponents.pagesErrorUnauthorized,
    meta: {
      title: 'Unauthorized'
    }
  },
  {
    path: '/404',
    component: constantComponents.pagesErrorNotFound,
    meta: {
      title: 'NotFound'
    }
  }
]
