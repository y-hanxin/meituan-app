<template>
  <div class="page-register">
    <div class="header">
      <header class="header--mini">
        <a class="site-logo"
           href="http://www.meituan.com">美团</a>
        <div class="login">
          <span class="bold">已有美团账号？</span>
          <router-link :to="{name: 'login'}">登陆</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form :model="regsiterForm"
               status-icon
               :rules="rules"
               ref="regsiterForm"
               label-width="100px"
               class="demo-regsiterForm">
        <el-form-item label="手机号"
                      prop="userName">
          <el-input type="text"
                    v-model="regsiterForm.userName"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input type="password"
                    v-model="regsiterForm.passWord"
                    autocomplete="off"
                    @input="input"></el-input>

          <div class="pw-strength">
            <div :class="['bar',strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="rePassWord">
          <el-input type="password"
                    v-model="regsiterForm.rePassWord"
                    autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('regsiterForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>
<script>
export default {
  data () {
    //账号校验
    var validateUser = (rule, value, callback) => {
      if (value == '') {
        callback(new Error('请输入手机号'));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error('账号不符合'));
      } else {
        callback();
      }
    }
    //密码校验
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error('密码不符合'));
      }
      else {
        if (this.regsiterForm.rePassWord !== '') {
          this.$refs.regsiterForm.validateField('rePassWord');
        }
        callback();
      }
    };
    //二次密码校验
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.regsiterForm.passWord) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      regsiterForm: {
        userName: '',
        passWord: '',
        rePassWord: ''
      },
      strengthClass: '',
      rules: {
        userName: [
          { validator: validateUser, trigger: 'blur' }
        ],
        passWord: [
          { validator: validatePass, trigger: 'blur' }
        ],
        rePassWord: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     //后端接口校验
      //     api.register({
      //       params: this.regsiterForm
      //     }).then((reg) => {
      //       if (res.data.status == 'success') {
      //         this.$router.push({ name: 'name' })
      //       } else {
      //         alert('用户名不正确')
      //       }
      //     })
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
    input () {
      var regStr = /(\w)+/g;
      var regNum = /(\d)+/g;
      var reg = /_/g;
      var strong = this.regsiterForm.passWord.match(reg) && this.regsiterForm.passWord.match(regStr) && this.regsiterForm.passWord.match(regNum)
      if (this.regsiterForm.passWord.length > 20 || (this.regsiterForm.passWord > 6 && strong)) {
        this.strengthClass = 'strong';
      } else if (this.regsiterForm.passWord.length < 6) {
        this.strengthClass = 'week';
      } else if (!this.regsiterForm.passWord) {
        this.strengthClass = '';
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