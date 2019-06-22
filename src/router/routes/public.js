import { constantComponents, plainExport } from 'ROUTER/components'

/**
 * meta: {
 *   title: 'route title', // Route will be hidden if meta.title is falsy value
 *   icon: '', // title text icon name
 *   layout: '', // layout name, 'plain' or 'dashboard'(default value)
 *   access: ['manage.device.read'] // current route access, it can be any string
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
    component: constantComponents.pagesHome,
    meta: {
      title: 'Home',
      icon: 'el-icon-s-home'
    }
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
      title: 'Admin',
      icon: 'el-icon-user-solid'
    },
    children: [
      {
        path: 'dashboard',
        component: constantComponents.pagesAdminDashboard,
        meta: {
          title: 'Dashboard',
          access: [
            'manage.device.read',
            'manage.device.write',
            'manage.device.import'
          ]
        }
      },
      {
        path: 'table',
        component: constantComponents.pagesAdminTable,
        meta: {
          title: 'Table',
          icon: 'el-icon-tickets',
          access: [
            'manage.device.read',
            'manage.device.write',
            'manage.device.import'
          ]
        }
      }
    ]
  },
  {
    path: '/public',
    component: plainExport,
    meta: {
      title: 'Public',
      icon: 'el-icon-s-promotion'
    },
    children: [
      {
        path: 'anyone',
        component: constantComponents.pagesPublicAnyone,
        meta: {
          title: 'Anyone'
        }
      }
    ]
  },
  {
    path: '/nested',
    component: constantComponents.pagesNested,
    meta: {
      title: 'Nested',
      icon: 'el-icon-s-management'
    },
    children: [
      {
        path: 'nested-1',
        component: constantComponents.pagesNested,
        meta: {
          title: 'nested-1'
        },
        children: [
          {
            path: 'nested-2',
            component: constantComponents.pagesNested,
            meta: {
              title: 'nested-2'
            }
          }
        ]
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
