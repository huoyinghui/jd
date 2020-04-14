import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import IconSvg from './components/IconSvg.vue'

import axios from 'axios';
Vue.prototype.$axios = axios; //全局注册，使用方法为:this.$axios

//全局注册icon-svg
Vue.component('icon-svg', IconSvg)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
