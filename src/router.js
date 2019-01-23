import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import home from './components/home.vue';
import fenglei from './components/fenglei.vue';
import buycar from './components/buycar.vue';
import gerenzhongxin from './components/gerenzhongxin.vue';
import list from './components/list.vue';
import login from './components/login.vue';
import sign from './components/sign.vue';
import error from './components/error.vue';
import detail from './components/detail.vue';
import buy from './components/buy.vue';
import order from './components/order.vue';
import daifahuo from './components/daifahuo.vue';


export default new Router({
  routes: [
    {
      path: '/home',
      component: home,
    },
    {
      path: '/list',
      component: list
    },
    {
      path: '/fenglei',
      component: fenglei
    },
    {
      path: '/buycar',
      component: buycar
    },
    {
      path: '/gerenzhongxin',
      component: gerenzhongxin
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/sign',
      component: sign
    },
    {
      path: '/detail/:id',
      name:'detail',
      component: detail
    },
    {
      path: '/buy',
      component: buy
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/daifahuo',
      component: daifahuo
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      component:error
    },
  ]
})