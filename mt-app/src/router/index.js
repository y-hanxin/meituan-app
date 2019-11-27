import Vue from 'vue'
import Router from 'vue-router'
import PageDefault from '../layout/default.vue'
import PageBlank from '../layout/blank.vue'
import Index from '../page/index.vue'
import ChangeCity from '../page/changeCity.vue'
import Goods from '../page/goodsList.vue'
import Login from '../page/login.vue'
import Register from '../page/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageDefault',
      component: PageDefault,
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }, {
        path: 's/:name',
        name: 'goods',
        component: Goods
      }, {
        path: '/changecity',
        name: 'ChangeCity',
        component: ChangeCity
      }]
    },
    {
      path: '/blank',
      name: 'blank',
      component: PageBlank,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
