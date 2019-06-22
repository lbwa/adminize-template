<template functional>
  <div class="admin">
    <p>
      This route with its aside menu title item will
      <strong>disappear</strong> when current user has correct access.
    </p>
    <p>
      Current route is
      <strong>{{ parent.$route.path }}</strong>
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
