import { userLogin } from 'API'
import types from './mutations/types'

export default {
  userLogin ({ commit }, { username, password }) {
    return userLogin({
      username,
      password
    })
      .then(res => {
        commit(types.SET_USERNAME, username)
        commit(types.SET_ACCESS_TOKEN, res.access_token)
      })
      .catch(console.error)
  }
}
