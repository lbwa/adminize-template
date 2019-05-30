import privateRoutes from 'ROUTER/routes/private'

/**
 * @description According to user service accesses to create access map used to
 * query user access conveniently
 * @param {Array} accesses a list presenting user service accesses, not formatted
 * accesses sample: ['app.coreService.read', 'app.sampleService.read']
 */
export function createAccessMap(accesses) {
  return accesses.reduce((accessMap, access) => {
    const accessNameList = access.access.split('.')
    /**
     * 1. accessNameList[1] present a service module name, eg, `device`
     * 2. accessNameList[2] present an access about a service module.
     *    eg, read access, `write` access, etc.
     */
    accessMap[accessNameList[1]] = (accessMap[accessNameList[1]] || []).concat(
      accessNameList[2]
    )
    return accessMap
  }, {})
}

/**
 * @description Generate a private route based on the current user's access map
 * @param {Array} routes All private routes used to filter
 * @param {Object} accessMap A map presenting the service access of current user
 */
export default function createPrivateRoutes(accessMap, routes = privateRoutes) {
  return routes.reduce((filteredRoutes, route) => {
    const routeCopy = { ...route } // shallow copy
    /**
     * validate private route access, determine whether private route is added
     * to global routes map.
     */
    if (validateAccess(route, accessMap)) {
      if (routeCopy.children) {
        // filter children routes recursively
        routeCopy.children = createPrivateRoutes(accessMap, routeCopy.children)
      }

      if (!(routeCopy.children && !routeCopy.children.length)) {
        filteredRoutes.push(routeCopy)
      }
    }
    return filteredRoutes
  }, [])
}

/**
 * @description validate route access, based on current user access
 * @param {Object} route one of the private routes
 * @param {Array} accessMap A map presenting the service access of current user
 */
export function validateAccess(route, accessMap) {
  if (route.meta && route.meta.access) {
    return Object.keys(route.meta.access).every(accessName => {
      // Return false when route accesses has not been satisfied
      if (!accessMap[accessName]) return false

      return route.meta.access[accessName].every(routeAccess =>
        accessMap[accessName].includes(routeAccess)
      )
    })
  }

  // situation: preset private route has no 'access' field
  return true
}
