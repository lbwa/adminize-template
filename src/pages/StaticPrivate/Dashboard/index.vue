<template functional>
  <div class="dashboard">
    Current routes is
    <strong>{{ parent.$route.path }}</strong
    >.
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
