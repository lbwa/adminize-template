import types from './types'

export default {
  [types.SET_USERNAME] (state, username) {
    state.username = username
  },
  [types.SET_ACCESS_TOKEN] (state, accessToken) {
    state.accessToken = accessToken
  }
}
