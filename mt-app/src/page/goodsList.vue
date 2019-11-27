<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumb />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categrop />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">
        ditu
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Crumb from '../components/product/crumbs.vue'
import Categrop from '../components/product/categroy.vue'
import List from '../components/product/list.vue'
export default {
  components: {
    Crumb,
    Categrop,
    List
  }
}
</script>
<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>