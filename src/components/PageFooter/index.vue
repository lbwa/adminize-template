<template functional>
  <p class="author__info">Copyright &copy; {{new Date().getFullYear()}} 版权所有 All rights reserved.</p>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>

$gap: 60px;

.author__info {
  margin: 0;
  text-align: center;
  line-height: $gap;
  font-size: 14px;
  color: #999999;
}
</style>
