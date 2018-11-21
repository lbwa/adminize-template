import Vue from 'vue'
import 'normalize.css'
import App from './App'

// Including Vue prototype functions (eg. this.$messageBox())
import './plugins/element.js'

// Shouldn't use Router instance directly without 'PERMISSION/index' processing.
import router from './permission'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
