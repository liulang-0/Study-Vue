<template>
  <div id="login">
    <div class="login-form">
      <div class="tabs">
        <el-button type="primary" @click="loginHandle">登录</el-button>
        <el-button type="danger" @click="registerHandle">注册</el-button>
      </div>
      <div style="height: 10px;"></div>
      <el-form
        class="formLogin"
        v-if="loginRegisterVisible"
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-row>
          <el-button>登录</el-button>
        </el-row>
      </el-form>
      <el-form
        class="formRegister"
        v-if="!loginRegisterVisible"
        ref="form"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-row>
          <el-button>注册</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  comments: {},
  data() {
    return {
      loginRegisterVisible: true,
      form: {
        username: null,
        password: null
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    registerHandle() {
      this.loginRegisterVisible = false;
    },
    loginHandle() {
      this.loginRegisterVisible = true;
    }
  },
  props: {},
  watch: {}
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #2c3e50;
}
.login-form {
  width: 380px;
  margin: 0 auto;
  position: relative;
  top: 35%;
}
::v-deep .login-form .el-form-item__label {
  color: aliceblue;
}
</style>
