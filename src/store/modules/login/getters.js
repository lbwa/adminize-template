export default {
  username (state) {
    return state.username
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
