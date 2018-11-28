import { dynamicComponents, plainExport } from 'ROUTER/components'
import permission from 'PERMISSION/roles-map'

export default [
  {
    path: '/private',
    name: 'private',
    component: plainExport,
    meta: {
      title: 'Private'
    },
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'Admin',
          roles: permission.private.admin
        }
      },
      {
        path: 'user',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'User',
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
    meta: {
      title: 'Single'
    },
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'Admin',
          roles: permission.private.admin
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]
