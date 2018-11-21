import types from './types'
import { constantRoutes } from 'ROUTER'
import createImporters, { createChunkName } from 'ROUTER/components/importer'
import { isAbsolute } from 'path'
import { setTokenToLocal, removeTokenFromLocal } from 'UTILS/storage'

export default {
  [types.SET_USERNAME] (state, username) {
    state.username = username
  },
  [types.SET_ACCESS_TOKEN] (state, accessToken) {
    accessToken
      ? setTokenToLocal(accessToken)
      : removeTokenFromLocal()
    state.accessToken = accessToken
  },
  [types.SET_DYNAMIC_ROUTES] (state, dynamicRoutes) {
    const components = createImporters(dynamicRoutes)
    state.dynamicRoutes = dynamicRoutes.map(path => {
      // eg. Routes: {
      //   path: '/page/dashboard',
      //   component: components.pageDashboard
      // }
      return {
        path: isAbsolute(path) ? path : `/${path}`,
        component: components[createChunkName(path)]
      }
    })
  },
  [types.SET_ALL_ROUTES] (state) {
    state.allRoutes = [...constantRoutes, ...state.dynamicRoutes]
  }
}
