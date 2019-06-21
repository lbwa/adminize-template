import { dynamicComponents, plainExport } from 'ROUTER/components'

export default [
  {
    path: '/private',
    name: 'private',
    component: plainExport,
    meta: {
      title: 'Private Device',
      icon: 'el-icon-picture'
    },
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'Admin',
          access: [
            'manage.device.read',
            'manage.device.write',
            'manage.device.import'
          ]
        }
      },
      {
        path: 'user',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'User',
          access: ['manage.device.read']
        }
      }
    ]
  },
  // Should be hide all /private/* routes when user access exclude 'admin'
  // Because the only child route can only be accessed by admin
  {
    path: '/app',
    component: plainExport,
    meta: {
      title: 'Private App',
      icon: 'el-icon-s-platform'
    },
    children: [
      {
        path: 'admin',
        component: dynamicComponents.pagesPrivate,
        meta: {
          title: 'Admin',
          access: ['manage.app.read', 'manage.app.write']
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
