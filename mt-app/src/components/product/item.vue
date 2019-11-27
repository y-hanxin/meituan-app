<template>
  <dl class="s-item">
    <dt>
      <img :src="mate.img"
           alt="#">
    </dt>
    <dd>
      <h3>
        <router-link :to="{name:'productDeatil'}">{{mate.title}}</router-link>
      </h3>
      <p>
        <el-rate v-model="mate.score"
                 disabled
                 show-score
                 text-color="#ff9900"
                 score-template="{value}">
        </el-rate>
        <span v-if="mate.score > 4.5">很好</span>
        <span v-else-if="mate.score > 4">好</span>
        <span v-else-if="mate.score > 3.5">不错</span>
        <span v-else>一般</span>
        <span>{{mate.score}}分</span>
        <span class="s-item-comment-total">{{mate.commentNum}}人评论</span>
      </p>
      <p>
        <span>
          <span v-for="(v,i) in meta.tab"
                :key="v">{{v + (i < meta.tab.length - 1 ? '|':'')}}</span>
        </span>
        <span class="">{{meta.address}}</span>
        <span>
          <a href="">
            <i class="el-icon-location-outline">查看地图</i>
          </a>
        </span>
      </p>
      <p>
        <span>人均￥{{meta.avg_price}}</span>
      </p>
      <ul class="deal-items">
        <li class="items"
            v-for="(item,index) in meat.deal_items.slice(0,2)"
            :key="index">
          <p class="deal-title">{{item.title}}</p>
          <p>
            <span class="deal-price">￥{{item.price}}</span>
            <span class="deal-old-price">门市价￥{{item.counter_price}}</span>
            <span class="deal-sales">已售{{item.saleNum}}</span>
          </p>
        </li>
      </ul>
    </dd>
  </dl>
</template>
<script>
export default {
  props: [
    'mate'
  ]
}
</script>