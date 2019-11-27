<template>
  <div class="m-menu">
    <dl class="nav"
        @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList"
          :key="index"
          @mouseenter="menuEnter(item)">
        <i :class="item.icon"></i>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail"
         v-if="curDetail"
         @mouseenter="detailEnter"
         @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.children">
        <h2 :key="index">{{item.title}}</h2>
        <a href="#"
           v-for="(v,i) in item.children"
           :key="v+'_'+i">{{v}}</a>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      curDetail: null,
      menuList: [{
        title: '美食',
        icon: 'food',
        children: [{
          title: '美食',
          children: ['西餐', '西餐', '西餐']
        }]
      }, {
        title: '外卖',
        icon: 'takeout',
        children: [{
          title: '美团外卖',
          children: ['外卖', '西', '餐']
        }]
      }]
    }
  },
  methods: {
    menuEnter (item) {
      this.curDetail = item
    },
    menuLeave () {
      var self = this
      this.timer = setTimeout(function () {
        self.curDetail = null
      }, 300)
    },
    detailEnter () {
      clearTimeout(this.timer)
    },
    detailLeave () {
      this.curDetail = null
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
