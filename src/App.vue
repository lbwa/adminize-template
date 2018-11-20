<template>
  <div id="app">
    <transition name="layout" mode="out-in">
      <component :is="currentLayout">
        <router-view/>
      </component>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layout: 'Login'
    }
  },

  methods: {
    onRouteUpdate (newRoute, oldRoute) {
      this.layout = newRoute.meta.layout || 'material'
    },
    upperCasePrefix (key) {
      return key.replace(/^[a-z]/, key => key.toUpperCase())
    }
  },

  watch: {
    '$route': 'onRouteUpdate'
  },

  computed: {
    currentLayout () {
      return () => import(
        /* webpackChunkName: 'layout-[request]' */
        `LAYOUT/${this.upperCasePrefix(this.layout)}.vue`
      )
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
