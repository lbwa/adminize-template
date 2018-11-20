<template>
  <el-container class="layout__material">
    <!-- Dynamic aside rendering area -->

    <el-container>
      <el-header>
        <el-button
          class="logout"
          type="text"
          @click="onLogout"
        >Logout</el-button>
      </el-header>
      <router-view/>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    onLogout () {
      this.$store.dispatch('login/userLogout')
        .then(() => this.$router.replace('/login'))
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
