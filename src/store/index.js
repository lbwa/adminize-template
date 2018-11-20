import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import state from './state'
import getters from './getter'
// sync operation
import mutations from './mutations'
// async operation
import actions from './actions'
import modules from './modules'

const __DEV__ = process.env.NODE_ENV === 'development'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions,
  strict: __DEV__,
  plugins: __DEV__ ? [createLogger()] : []
})
