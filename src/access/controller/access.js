import store from 'STORE'

function hasAccess(access, accessMap = store.getters['login/accessMap']) {
  return !!accessMap[access]
}

function hasEveryAccess(
  accesses,
  accessMap = store.getters['login/accessMap']
) {
  if (Array.isArray(accesses)) {
    return accesses.every(access => !!accessMap[access])
  }
  throw new Error(`[hasEveryAccess]: ${accesses} should be a array !`)
}

function hasSomeAccess(accesses, accessMap = store.getters['login/accessMap']) {
  if (Array.isArray(accesses)) {
    return accesses.some(access => !!accessMap[access])
  }
  throw new Error(`[hasSomeAccess]: ${accesses} should be a array !`)
}

export default {
  install(Vue) {
    Vue.prototype.$_hasAccess = hasAccess
    Vue.prototype.$_hasEveryAccess = hasEveryAccess
    Vue.prototype.$_hasSomeAccess = hasSomeAccess
  }
}
