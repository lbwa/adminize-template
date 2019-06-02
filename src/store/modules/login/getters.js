import { createAccessMap } from 'PERMISSION/controller/routes'

export default {
  username(state) {
    return (state.userInfo && state.userInfo.username) || '无用户名'
  },
  accessToken(state) {
    return state.accessToken
  },
  accesses(state) {
    return state.accesses
  },
  accessMap(state) {
    return createAccessMap(state.accesses)
  },
  // used to create recursive aside.
  allRoutes(state) {
    return state.allRoutes
  }
}
