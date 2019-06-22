<template functional>
  <div class="anyone">
    <h3>This route is public without any user access verification.</h3>
    <p>
      Current route is
      <strong>{{ parent.$route.path }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'PublicAnyone'
}
</script>

<style lang="sass" scoped>
.anyone
  +flex-center
  height: 100%
</style>
