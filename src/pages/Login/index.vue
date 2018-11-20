<template>
  <section class="login">
    <el-form
      class="login__form"
      label-position="right"
      :model="userInfo"
      :rules="rules"
      ref="login"
      status-icon
      @keyup.enter.native="onSubmit"
    >
      <h1 class="login__form__title">admin template</h1>
      <el-form-item prop="username">
        <el-input
          v-model="userInfo.username"
          placeholder="请输入用户名"
          clearable
        >
          <i slot="prefix" class="el-icon-service"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="userInfo.password"
          placeholder="请输入密码"
          type="password"
          clearable
        >
          <i slot="prefix" class="el-icon-goods"></i>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
          class="login__controller__submit"
        >登陆</el-button>
      </el-form-item>
    </el-form>
    <el-footer class="login__footer">
      <p class="author__info">Copyright &copy; {{currentYear}}</p>
    </el-footer>
  </section>
</template>

<script>
import rules from './rules'

export default {
  data () {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      rules
    }
  },

  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },

  methods: {
    onSubmit () {
      this.$refs.login.validate(isValid => {
        if (!isValid) return
        this.$store.dispatch('login/userLogin', this.userInfo)
          .then(() => this.$router.push('/'))
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.layout__login {
  min-height: 100vh;
}

.login {
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    height: calc(100vh - 60px);
    max-width: 400px;

    &__title {
      text-transform: capitalize;
    }
  }

  &__controller {
    &__submit {
      width: 100%;
    }
  }

  &__footer {
    .author__info {
      margin: 0;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>
