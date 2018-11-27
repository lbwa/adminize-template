import { dynamicComponents, plainExport } from 'ROUTER/components'
import permission from 'PERMISSION/RolesMap'

export default [
  {
    path: '/private',
    name: 'private',
    component: plainExport,
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivate,
        meta: {
          roles: permission.private.admin
        }
      },
      {
        path: 'user',
        component: dynamicComponents.pagesPrivate,
        meta: {
          roles: permission.private.user
        }
      }
    ]
  },
  // Should be hide all /private/* routes when user access exclude 'admin'
  // Because the only child route can only be accessed by admin
  {
    path: '/single',
    component: plainExport,
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivate,
        meta: {
          roles: permission.private.admin
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]
