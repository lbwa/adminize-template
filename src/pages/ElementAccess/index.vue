<template>
  <div class="">
    <adminize-card>
      <h4>{{ $t('elementAccess.title') }}</h4>
      <ul>
        <li class="element-access__item">
          <h4>{{ $t('elementAccess.functionTitle') }}</h4>
          <p>{{ $t('elementAccess.desc') }}</p>
          <el-tag v-if="$_hasAccess('admin.device.read')"
            >admin.device.read</el-tag
          >
          <el-tag v-if="$_hasAccess('user.device.read')"
            >user.device.read</el-tag
          >
        </li>
      </ul>
    </adminize-card>
  </div>
</template>

<script>
import AdminizeCard from 'LAYOUT/Card'

export default {
  name: 'ElementAccess',

  components: {
    AdminizeCard
  },

  i18n: {
    messages: {
      en: {
        elementAccess: {
          title: 'Element access verification',
          functionTitle:
            'Use $_hasAccess, $_hasSomeAccess, $_hasEveryAccess function',
          directiveTitle: 'Use v-access custom directive',
          desc:
            'There is a `admin.device.read` tag when you login as admin, otherwise `user.device.read` tag will be shown up.'
        }
      },
      zh: {
        elementAccess: {
          title: '按钮（元素）级权限测试',
          functionTitle:
            '使用 $_hasAccess, $_hasSomeAccess, $_hasEveryAccess 方法',
          directiveTitle: '使用 v-access 自定义指令',
          desc:
            '当你以 admin 的身份登陆时，你将看到一个 `admin.device.read` 的标签，否则将看到一个 `user.device.read` 的标签。'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
