<template>
  <div class="choose-wrap"
       @click="showWrapper"
       v-document-click="documentClik">
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':showWrapperActive}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col">
            <span class="mt-item"
                  v-for="(item,index) in list"
                  :key="index"
                  @click="changeValue(item)">{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: [
    'list',
    'title',
    'value',
    'showWrapperActive'
  ],
  methods: {
    showWrapper (e) {
      //阻止事件冒泡
      e.stopPropagation();
      //this.showWrapperActive = true;
      //调用父组件方法
      this.$emit('change_active', true);
    },
    documentClik () {
      this.$emit('change_active', false);
      console.log('documentClik');
    },
    changeValue (item) {
      this.$emit('change', item)
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
