import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import IconSvg from './components/IconSvg.vue'

// import './assets/icon/iconfont.css'
// require ('./assets/icon/iconfont.js')

Vue.component("icon-svg", IconSvg);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
