import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'lib-flexible'

// import {post,get} from './api/request.js'
// import { delCookie, getCookie, setCookie } from "./api/cacheManager";
// import axios from 'axios';
// import './assets/css/homeBase.css'
//指向原型 封装的方法
// Vue.prototype.$post = post;
// Vue.prototype.$get = get;
// Vue.prototype.$axios = axios;

// Vue.config.productionTip = false

import OperationTitle from "./components/view/OperationTitle.vue";
Vue.component('operationTitle', OperationTitle)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
