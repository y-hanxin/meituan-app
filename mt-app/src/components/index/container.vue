<template>
  <div class="m-istyle">
    <dl @mouseover="over"
        :class="nav.class">
      <dt>{{nav.title}}</dt>
      <!-- 设置数据类型 -->
      <dd v-for="(item,index) in nav.list"
          :key="index"
          :class="{active: kind == item.tab}"
          :data-type="item.tab">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in list"
          :key="index">
        <el-card :body-style="{ padding: '0px' }"
                 shadow="never">
          <img :src="item.img"
               class="image">
          <div class="poi-info cbody">
            <div class="title"
                 :title="item.title">{{item.title}}</div>
            <div class="sub-title"
                 :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info"
                 v-if="item.rentNull && item.price_info.curPrice">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.curPrice}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.oldPrice}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info"
                 v-else-if="!item.rentNull">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info"
                 v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}/</span><span class="units">{{item.price_info.units}}均</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      kind: 'all',
      list: [{
        img: '//p0.meituan.net/msmerchant/2a2f5dad1fef25a7fb389288740f72f4459641.jpg@460w_260h_1e_1c',
        title: '大教堂蛋糕 Kathedral（王府中环店）',
        sub_title: '蛋糕4选1,约1.9磅',
        price_info: {
          curPrice: 18,
          oldPrice: 599
        },
        rentNull: 0,
        address: '王府井 / 东单'
      },
      {
        img: '//p1.meituan.net/msmerchant/913c7d2286d407e79a06bd77514b22df176709.jpg@460w_260h_1e_1c',
        title: '大教堂蛋糕 Kathedral（王府中环店）',
        sub_title: '蛋糕4选1,约1.9磅',
        price_info: {
          curPrice: 18,
          oldPrice: 599
        },
        rentNull: 10,
        address: '王府井 / 东单'
      },
      {
        img: '//p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@460w_260h_1e_1c',
        title: '大教堂蛋糕 Kathedral（王府中环店）',
        sub_title: '蛋糕4选1,约1.9磅',
        price_info: {
          curPrice: null,
          oldPrice: null,
          avg_price: 18,
          units: '人'
        },
        rentNull: 5,
        address: '王府井 / 东单'
      }]
    }
  },
  props: [
    'nav'
  ],
  methods: {
    over (e) {
      console.log(e)
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      console.log(tagName)
      if (tagName != 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      // ajax获取数据
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
