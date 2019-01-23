import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import './assets/css/base.css';
import './assets/css/style.css';

import loading from './components/loading'
Vue.use(loading);

// import axios from 'axios'
// window.axios=axios;   X

import axios from './plugins/axios'  // √
Vue.use(axios)

new Vue({
  data:{
    bgloading:false
  },
  router,
  store,

  render: h => h(App)
}).$mount('#app')


