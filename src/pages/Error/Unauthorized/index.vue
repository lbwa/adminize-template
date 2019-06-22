<template functional>
  <section class="unauthorized">
    <h2>403</h2>
    <p>You are unauthorized !</p>
    <p>If you have any questions, contact tech support !</p>
  </section>
</template>

<script>
export default {
  name: 'Unauthorized'
}
</script>

<style lang="sass" scoped>
.unauthorized
  +flex-center
  height: 100%
</style>
