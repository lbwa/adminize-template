<template>
  <div class="common__user">
    {{info}}
    <router-link to="/home">home</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: 'this is /pages/common/user'
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
