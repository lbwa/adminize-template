<template>
  <div class="admin__table">
    {{info}}
    <router-link to="/pages/common/user">user center</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: 'this is /pages/admin/table'
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
