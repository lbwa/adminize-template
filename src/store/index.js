import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
// Preserve all vuex state when page reloading.
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

const __DEV__ = process.env.NODE_ENV === 'development'
// https://github.com/robinvdvleuten/vuex-persistedstate
// https://github.com/js-cookie/js-cookie
const persistedState = createPersistedState({
  key: '$_VUEX_STORE',
  // default: window.localStorage
  storage: {
    getItem: key => Cookies.get(key),
    // `expires: default`: Cookie is removed when the user closes the browser.
    setItem: (key, value) => Cookies.set(key, value, { secure: !__DEV__ }),
    removeItem: key => Cookies.remove(key, Cookies.get(key))
  }
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state,
  mutations,
  actions,
  strict: __DEV__,
  plugins: __DEV__ ? [createLogger(), persistedState] : [persistedState]
})
