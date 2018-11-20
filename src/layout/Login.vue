<template>
  <section class="layout__login">
    <el-header class="login__header">login header</el-header>
    <el-form
      class="login__form"
      :label-position="right"
      label-width="80px"
      :model="userInfo"
    >
      <el-form-item label="用户名">
        <el-input v-model="userInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userInfo.password"></el-input>
      </el-form-item>
    </el-form>
    <el-footer class="login__footer">login footer</el-footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: '',
        password: ''
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>