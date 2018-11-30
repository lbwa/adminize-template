import types from './types'
import { tokenFromStorage, usernameFromStorage } from 'UTILS/storage'

export default {
  [types.SET_USERNAME] (state, username) {
    username
      ? usernameFromStorage.setItem(username)
      : usernameFromStorage.removeItem()
    state.username = username
  },
  [types.SET_ACCESS_TOKEN] (state, accessToken) {
    accessToken
      ? tokenFromStorage.setItem(accessToken)
      : tokenFromStorage.removeItem()
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
