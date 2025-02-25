import Vue from 'vue'
import i18n from './i18n'
import store from './store'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css'
import '@/styles/var.css'

import App from './App.vue'
import ElementUI from 'element-ui'
import Vant from 'vant'

// 引入 Element UI
Vue.use(ElementUI, {
  // Element UI i18n：https://element.eleme.io/#/zh-CN/component/i18n
  i18n: (key, value) => i18n.t(key, value),
})
// 引入 Vant
Vue.use(Vant)

Vue.config.productionTip = false

const vm = new Vue({
  i18n,
  store,
  router,
  render: h => h(App),
})

vm.$mount('#app')
