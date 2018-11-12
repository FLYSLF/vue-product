// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
//引入axios和vue-axios
import Axios from 'axios'
import Vueaxios from 'vue-axios'

import Mint from "mint-ui"
import "mint-ui/lib/style.css"

import store from "./store/store"

Vue.use(Mint);

Vue.use(Vueaxios,Axios);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data: {
     eventHub: new Vue() // 使用集中的事件处理器,一劳永逸的在任何组件调用事件发射、接受的方法
   }
})
