<template>
  <el-aside
    class="layout__material__aside"
    :width="$store.state.isAsideCollapse ? `254px` : `80px`"
  >
    <h1 class="aside__title">admin template</h1>
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
  color: white;

  .aside {
    &__title {
      margin: 0;
      vertical-align: middle;
      text-transform: capitalize;
      font-size: 20px;
      font-weight: 600;
      line-height: 60px;
    }
  }
}
</style>
