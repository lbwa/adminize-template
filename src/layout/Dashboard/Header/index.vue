<template>
  <el-header class="layout__dashboard__header">
    <i class="el-icon-menu header__icon" @click="toggleAside"></i>

    <div class="user">
      <img
        src="~../img/logo.png"
        height="30%"
        alt="avatar"
        class="user__avatar"
      />
      <span class="user__name" :title="username">{{ username }}</span>

      <!-- logout -->
      <el-button class="logout" type="plain" @click="onLogout" size="mini">{{
        $t('logout')
      }}</el-button>
    </div>
  </el-header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Header',

  data() {
    return {
      username: 'default name'
    }
  },

  methods: {
    onLogout() {
      this.$store
        .dispatch('login/userLogout')
        .then(() => this.$router.replace('/login'))
    },
    ...mapMutations({
      toggleAside: 'SET_ASIDE_COLLAPSE'
    })
  },

  i18n: {
    messages: {
      en: {
        logout: 'Logout'
      },
      zh: {
        logout: '登出'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.layout__dashboard__header
  padding: 0 24px 0 0
  position: relative // for box-shadow
  background-color: $main-white
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08)

  .header
    &__icon
      padding: 0 24px
      line-height: 60px
      cursor: pointer
      font-size: 20px
      transition: all 0.3s, padding 0s

  .user
    float: right
    height: 60px

    &__name,
    &__avatar
      line-height: 60px
      vertical-align: middle

    &__name
      margin: 0 10px
      display: inline-block
      width: 90px
      cursor: pointer
      +text-dot
</style>
