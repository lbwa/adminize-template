import { dynamicComponents, plainExport } from 'ROUTER/components'
import permission from 'PERMISSION/rolesMap'

export default [
  {
    path: '/access',
    name: 'access',
    component: plainExport,
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesAccess,
        meta: {
          roles: permission.access.admin
        }
      },
      {
        path: 'user',
        component: dynamicComponents.pagesAccess,
        meta: {
          roles: permission.access.user
        }
      }
    ]
  },
  // Should be hide all /private/* routes when user access exclude 'admin'
  // Because the only child route can only be accessed by admin
  {
    path: '/private',
    component: plainExport,
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesAccess,
        meta: {
          roles: permission.access.admin
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]
