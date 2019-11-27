<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3"
              class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
             alt="美团">
      </el-col>
      <el-col :span="15"
              class="center">
        <div class="wrapper">
          <el-input v-model="searchWord"
                    @focus="focus"
                    @blur="blur"
                    placeholder="请输入内容"></el-input>
          <el-button type="primary"
                     icon="el-icon-search"></el-button>
          <!-- 点击时显示列表 -->
          <dl class="hotPlace"
              v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList"
                :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList"
              v-if="isSearchList">
            <dd v-for="(item,index) in searchList"
                :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#"
             v-for="(item,index) in suggestList"
             :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: ['北京欢乐谷', '八达岭长城', '圆明园', '北宫国家森林公园'],
      searchList: ['火锅', '榨菜', '梅菜扣肉', '大鸡腿'],
      suggestList: ['北京欢乐谷', '八达岭长城', '圆明园', '北宫国家森林公园']
    }
  },

  //获取数据
  created () {
    axios.get('http://api.duyiedu.com/api/meituan/header/searchHotWords.json', {
      params: {
        appkey: "dongmeiqi_i_1545272862243"
      }
    }).then(res => {
      console.log(res);
    })
  },
  computed: {
    isHotPlace: function () {
      // 返回当前是聚焦且没有数据状态
      return this.isFocus && !this.searchWord
    },
    isSearchList: function () {
      return this.focus && this.searchWord
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 300)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>
