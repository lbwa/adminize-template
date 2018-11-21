export default {
  // used to add user private routes to global routes map.
  dynamicRoutes (state) {
    return state.dynamicRoutes
  },
  // used to create recursive aside.
  allRoutes (state) {
    return state.allRoutes
  }
}
