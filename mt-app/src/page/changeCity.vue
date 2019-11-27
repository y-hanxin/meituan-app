<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市:"
           :list="hCity" />
    </el-row>
    <el-row>
      <hot title="最近访问:"
           :list="hCity" />
    </el-row>
    <el-row>
      <cotegory />
    </el-row>
  </div>
</template>
<script>
import Province from '../components/changeCity/province.vue'
import Hot from '../components/changeCity/hotCity.vue'
import Cotegory from '../components/changeCity/category.vue'
export default {
  data () {
    return {
      hCity: ['营仔市', '龙岗市', '下洋市']
    }
  },
  components: {
    Province,
    Hot,
    Cotegory
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>
