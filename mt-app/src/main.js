import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/assets/css/main.css'
import store from './store.js'
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.directive('document-click', {
  // bind(){} inserted(){} update(){}
  //定义全局事件
  bind (el, binding, vnode) {
    // console.log(el, binding, vnode);
    document.addEventListener('click', binding.value, false);
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
