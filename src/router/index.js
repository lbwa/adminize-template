import Vue from 'vue'
import Router from 'vue-router'
import { constantComponents } from './components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: constantComponents.pagesHome
    }
  ]
})
