<template>
  <el-container class="layout__material">
    <!-- Dynamic aside rendering area -->

    <el-container>
      <el-header>header</el-header>
      <router-view/>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang='scss' scoped>
</style>
