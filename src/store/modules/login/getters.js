export default {
  username (state) {
    return (state.userInfo && state.userInfo.username) || '无用户名'
  },
  accessToken (state) {
    return state.accessToken
  },
  role (state) {
    return state.role
  },
  // used to add user private routes (router.addRoutes) to global routes map.
  dynamicRoutes (state) {
    return state.dynamicRoutes
  },
  // used to create recursive aside.
  allRoutes (state) {
    return state.allRoutes
  }
}
