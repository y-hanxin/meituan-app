<template>

  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location" />深圳
      <router-link class="changeCity"
                   :to="{name:'ChangeCity'}">
        切换城市
      </router-link>
      [
      <a href="#">东方</a>
      <a href="#">基隆</a>
      <a href="#">嘉义市</a>
      ]
    </div>
    <div class="m-user"
         v-if="!$store.state.userNames">
      <router-link class="login"
                   :to="{name:'login'}">
        立即登陆
      </router-link>
    </div>
    <div class="m-user">
      <router-link class="register"
                   :to="{name:'register'}">
        注册
      </router-link>
    </div>
  </div>

</template>
<script>
export default {

}
</script>
