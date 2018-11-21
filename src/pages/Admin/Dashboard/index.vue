<template>
  <div class="admin__dashboard">
    {{info}}
    <router-link to="table">table</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: 'this is /pages/admin/dashboard'
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
