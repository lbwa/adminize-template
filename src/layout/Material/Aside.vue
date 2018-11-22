<template>
  <el-aside
    class="layout__material__aside"
    :width="$store.state.isAsideCollapse ? `254px` : `80px`"
  >
    material aside
  </el-aside>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
@import '~STYLE/color/background.scss';

.layout__material__aside {
  min-height: 100vh;
  background-color: $background-dark;
  transition: width .3s;
}
</style>
