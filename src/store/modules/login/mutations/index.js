import types from './types'
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
  [types.SET_USER_ROLE] (state, role) {
    state.role = role
  },
  [types.SET_DYNAMIC_ROUTES] (state, dynamicRoutes) {
    state.dynamicRoutes = dynamicRoutes
  },
  [types.SET_ALL_ROUTES] (state, allRoutes) {
    state.allRoutes = allRoutes
  }
}
