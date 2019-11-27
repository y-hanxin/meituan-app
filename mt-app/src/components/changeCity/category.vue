<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in list"
          :key="index"><a :href="'#city-' + item">{{item}}</a></dd>
    </dl>
    <dl class="m-categroy-section "
        v-for="(item,index) in cityList"
        :key="index"
        :id="'#city-' + index">
      <dt>{{index}}</dt>
      <dd v-for="city in item"
          :key="city.id">
        <span>{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      cityList: {}
    }
  },
  created () {
    var data = [
      {
        id: 20,
        name: "广州",
        pinyin: "guangzhou",
        acronym: "gz",
        rank: "A",
        firstChar: "G"      },
      {
        id: 30,
        name: "深圳",
        pinyin: "shenzhen",
        acronym: "sz",
        rank: "A",
        firstChar: "S"
      }];
    var obj = {}
    //处理数据
    data.forEach((item, index) => {
      //处理分类，转换大写
      if (!obj[item.firstChar.toUpperCase()]) {
        obj[item.firstChar.toUpperCase()] = []
      }
      obj[item.firstChar.toUpperCase()].push(item);
      this.cityList = obj
    })
  },
  methods: {

  }
}

</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>