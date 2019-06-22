<template functional>
  <div class="admin">
    <p>
      Current routes is
      <strong>{{ parent.$route.path }}</strong
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Admin'
}
</script>

<style lang="sass" scoped>
.admin
  +flex-center
  height: 100%
</style>
