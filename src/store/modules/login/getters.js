export default {
  username (state) {
    return state.username
  },
  role (state) {
    return state.role
  },
  // used to add user private routes to global routes map.
  dynamicRoutes (state) {
    return state.dynamicRoutes
  },
  // used to create recursive aside.
  allRoutes (state) {
    return state.allRoutes
  }
}
