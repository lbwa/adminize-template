<template>
  <el-container class="layout__material">
    <!-- Dynamic aside rendering area -->

    <el-container class="layout__material__placeholder">
      <el-header>
        <el-button
          class="logout"
          type="text"
          @click="onLogout"
        >Logout</el-button>
      </el-header>
      <router-view class="layout__material__placeholder-main"/>
      <el-footer class="layout__material__footer">
        Copyright &copy; {{currentYear}}
      </el-footer>
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
  },

  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang='scss' scoped>
.layout__material {
  &__placeholder {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &-main {
      flex: 1;
    }
  }

  &__footer {
    line-height: 60px;
  }
}
</style>
