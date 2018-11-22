<template>
  <el-header class="layout__material__header">
    <i
      class="el-icon-menu header__icon"
      @click="toggleAside"
    ></i>
    <el-button
      class="logout"
      type="text"
      @click="onLogout"
    >Logout</el-button>
    <el-button
      class="logout"
      type="text"
      @click="$router.push('/pages/admin/dashboard')"
    >dashboard</el-button>
    <el-button
      class="logout"
      type="text"
      @click="$router.push('/pages/admin/table')"
    >table</el-button>
    <el-button
      class="logout"
      type="text"
      @click="$router.push('/pages/common/user')"
    >user info</el-button>
  </el-header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    onLogout () {
      this.$store.dispatch('login/userLogout')
        .then(() => this.$router.replace('/login'))
    },
    ...mapMutations({
      toggleAside: 'SET_ASIDE_COLLAPSE'
    })
  }
}
</script>

<style lang='scss' scoped>
@import '~STYLE/color/background.scss';

.layout__material__header {
  padding: 0 24px 0 0;
  position: relative; // for box-shadow
  background-color: $background-lightest;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .header {
    &__icon {
      padding: 0 24px;
      line-height: 60px;
      cursor: pointer;
      font-size: 20px;
      transition: all .3s, padding 0s;
    }
  }
}
</style>
