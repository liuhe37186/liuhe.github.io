import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import 'lib-flexible'
// -----------网络请求$begin---------
import {post,get} from './api/request.js'
import { delCookie, getCookie, setCookie } from "./api/cacheManager";
import axios from 'axios';
// 指向原型 封装的方法
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$axios = axios;
// -----------网络请求$end---------

//引入日志打印工具类
// import LogUtils from './utils/LogUtils.js'
// Vue.use(LogUtils)
//引入全局css样式
import './assets/css/homeBase.css'



Vue.config.productionTip = false

import OperationTitle from "./components/view/OperationTitle.vue";
Vue.component('operationTitle', OperationTitle)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
