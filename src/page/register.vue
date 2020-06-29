<template>
  <div class="page-register">
    <div class="header">
      <header>
        <router-link class="site-logo" to="/index">
          <img src="../assets/img/mt.png" />
        </router-link>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link to="/login">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名：" prop="userName">
          <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="input"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码：" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {
  data () {
    const validateUser = (rule, value, callback) => {
      const rex = /^[\w_]{4,16}$/g
      if (value === '') {
        callback(new Error('请输入用户名！'))
      } else if (!value.match(rex)) {
        callback(new Error('用户名必须为4-16位的字母数字下划线组成！'))
      } else {
        callback()
      }
    }

    const validatePass = (rule, value, callback) => {
      const rex = /^[\w_]{6,16}$/g
      if (value === '') {
        callback(new Error('请输入密码！'))
      } else if (!value.match(rex)) {
        callback(new Error('密码必须为6-16位的字母数字下划线组成！'))
      } else {
        callback()
      }
    }

    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码！'))
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      registerForm: {
        userName: '',
        password: '',
        rePassword: ''
      },
      strengthClass: '',
      // 表单校验规则
      rules: {
        userName: [{ validator: validateUser, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        // 若表单通过校验，则valid为true
        if (valid) {
          api
            .register({
              params: this.registerForm
            })
            .then(res => {
              if (res.data.status === 'success') {
                this.$router.push({ name: 'login' })
              } else {
                alert(res.data.msg)
              }
            })
        } else {
          return false
        }
      })
    },
    input () {
      const rex = /^[\w_]{6,16}$/g
      const password = this.registerForm.password
      const flag = password.match(rex)

      if (!flag) {
        return
      }

      if (!password) {
        this.strengthClass = ''
      } else if (password.length > 12) {
        this.strengthClass = 'strong'
      } else if (password.length < 9) {
        this.strengthClass = 'week'
      } else {
        this.strengthClass = 'normal'
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>
