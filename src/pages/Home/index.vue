<template>
  <div class="home" v-if="isCompleted">
    <h3>{{ $t('pages.withoutVerification') }}</h3>
    <p>
      {{ $t('pages.currentRoute') }}
      <strong>{{ $route.path }}</strong>
    </p>
    <adminize-card>
      <h4>{{ $t('elementAccess.title') }}</h4>
      <p>{{ $t('elementAccess.desc') }}</p>
      <div class="home__element-access">
        <el-tag v-if="$_hasAccess('admin.device.read')"
          >admin.device.read</el-tag
        >
        <el-tag v-if="$_hasAccess('user.device.read')">user.device.read</el-tag>
      </div>
    </adminize-card>
  </div>
</template>

<script>
import AdminizeCard from 'LAYOUT/Card'

export default {
  name: 'home',

  data() {
    return {
      isCompleted: false
    }
  },

  created() {
    // simulate data fetching
    this.$__timer__ = setTimeout(() => {
      this.isCompleted = true
    }, 1000)
  },

  beforeDestroy() {
    clearTimeout(this.$__timer__)
  },

  components: {
    AdminizeCard
  },

  i18n: {
    messages: {
      en: {
        elementAccess: {
          title: 'Element access verification',
          desc:
            'There is a `admin.device.read` tag when you login as admin, otherwise `user.device.read` tag will be shown up.'
        }
      },
      zh: {
        elementAccess: {
          title: '按钮（元素）级权限测试',
          desc:
            '当你以 admin 的身份登陆时，你将看到一个 `admin.device.read` 的标签，否则将看到一个 `user.device.read` 的标签。'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.home
  +flex-center
  height: 100%

  &__element-access
    text-align: center
</style>
