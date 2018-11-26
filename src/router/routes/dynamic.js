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
  {
    path: '*',
    redirect: '/404'
  }
]
