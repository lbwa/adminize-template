<template>
  <el-container class="layout__material">
    <!-- Dynamic aside rendering area -->
    <material-aside/>

    <el-container class="layout__material__placeholder">
      <material-header/>

      <el-main class="layout__material__placeholder-main">
        <transition name="fade" mode="out-in">
          <router-view/>
        </transition>
      </el-main>

      <el-footer class="layout__material__footer">
        <page-footer/>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import MaterialHeader from './Header'
import MaterialAside from './Aside'
import PageFooter from 'COMPONENTS/PageFooter'

export default {
  components: {
    MaterialHeader,
    MaterialAside,
    PageFooter
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
