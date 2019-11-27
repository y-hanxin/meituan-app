<template>
  <!-- logo -->
  <div class="page-login">
    <div class="login-header">
      <a class="logo"
         href="http://www.meituan.com"></a>
    </div>
    <!-- 登陆 -->
    <div class="login-panel">
      <div class="banner">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
             width="480"
             height="370"
             alt="美团网">
      </div>
      <div class="form">
        <h4 v-if="error"
            class="tips">{{error}}</h4>
        <p><span>账号登陆</span></p>

        <el-input :class="{error: error && !userName}"
                  v-model="userName"
                  prefix-icon="profile"
                  placeholder="手机号"></el-input>

        <el-input :class="{error: error && !userName}"
                  v-model="passWord"
                  prefix-icon="password"
                  type="password"
                  placeholder="密码"></el-input>
        <div class="foot">
          <a href="#">忘记密码？</a>
        </div>
        <el-button type="primary"
                   class="btn-login"
                   @click="submit">登陆</el-button>
        <p class="reg">
          <span>还没有账号</span>
          <router-link :to="{name: 'regsiter'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper"><span class="title">合作网站账号登陆</span></h3>
          <div class="oauth cf">
            <span class="oauth__link oauth__link--qq third-login-btn"
                  data-href="/account/connect/tencent"
                  target="_blank"
                  id="J-third-tencent"></span>
            <span class="oauth__link oauth__link--weibo third-login-btn"
                  data-href="/account/connect/sina"
                  target="_blank"
                  id="J-third-sina"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <footer class="footer">
      <ul>
        <li class="first"><a rel="nofollow"
             href="https://about.meituan.com/about.html">关于美团</a></li>
        <li><a rel="nofollow"
             href="https://zhaopin.meituan.com/">加入我们</a></li>
        <li><a rel="nofollow"
             href="http://emis.meishi.meituan.com/merchantsSettled">商家入驻</a></li>
        <li><a rel="nofollow"
             href="https://www.meituan.com/help/faq">帮助中心</a></li>
        <li class="last"><a href="http://meituan.com/mobile">美团手机版</a></li>
      </ul>
      <p>
        ©<span>2019</span>
        <a href="https://www.meituan.com">美团网团购</a>
        meituan.com
        <a href="http://www.miibeian.gov.cn/"
           target="_blank">京ICP证070791号</a>
        京公网安备11010502025545号
      </p>

    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      passWord: '',
      error: ''
    }
  },
  methods: {
    submit () {
      if (!this.userName) {
        this.error = '请输入正确手机号'
        return false;
      }
      if (!this.passWord) {
        this.error = '请输入密码'
        return false;
      }
      //引入后台接口
      // api.login({
      //   params: {
      //     userName: this.userName,
      //     passWord: this.passWord,
      //   }
      // }).then((res) => {
      //   if (res.data.data == 'success') {
      //     $router.push({ name: 'index' })
      //this.$store.commit('setUserName',this.userName)
      //   }else{
      //this.error = res.data.msg
      //}
      // })
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>