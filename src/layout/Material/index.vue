<template>
  <el-container class="layout__material">
    <!-- Dynamic aside rendering area -->
    <material-aside/>

    <el-container class="layout__material__placeholder">
      <material-header/>

      <el-main class="layout__material__placeholder-main">
        <router-view/>
      </el-main>

      <el-footer class="layout__material__footer">
        Copyright &copy; {{currentYear}}
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import MaterialHeader from './Header'
import MaterialAside from './Aside'

export default {
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },

  components: {
    MaterialHeader,
    MaterialAside
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
    text-align: center;
  }
}
</style>
