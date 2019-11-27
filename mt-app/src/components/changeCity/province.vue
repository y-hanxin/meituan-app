<template>
  <div>
    <span class="name">按省份选择：</span>
    <my-select :list="provinceLsit"
               title="省份"
               :value="province"
               :showWrapperActive="provinceActive"
               @change_active="changeProviceActive"
               @change="changeProvince" />
    <my-select :list="cityList"
               title="城市"
               :value="city"
               :showWrapperActive="cityActive"
               @change_active="changeCityActive"
               @change="changeCity" />
    <span>直接搜索：</span>
    <el-select v-model="searchWord"
               filterable
               remote
               reserve-keyword
               placeholder="请输入关键词"
               :remote-method="remoteMethod">
      <!-- :loading="loading" -->
      <el-option v-for="item in searchList"
                 :key="item"
                 :label="item"
                 :value="item">
      </el-option>
    </el-select>
  </div>
</template>
<script>
import mySelect from './select.vue'
export default {
  data () {
    return {
      provinceLsit: ['广东', '广东', '广东', '广东', '广东', '广东'],
      province: '省份',
      cityList: ['营仔市', '龙岗市', '下洋市'],
      city: '城市',
      provinceActive: false,
      cityActive: false,
      searchList: ['营仔市', '龙岗市', '下洋市'],
      searchWord: '',
      searchLoading: false
    }
  },
  components: {
    mySelect
  },
  methods: {
    changeProviceActive (flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    changeProvince (value) {
      this.province = value
    },
    changeCity (value) {
      this.city = value
    },
    remoteMethod (e) {
      //请求后端接口
    }
  }
}
</script>
