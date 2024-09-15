import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

const app = createApp(App)

//#region 自定义指令
import red from './directives/red'
// 使 v-focus 在所有组件中都可用
app.directive('red', red)
//#endregion

//#region 插件
const randomNumber = {
  install(app, options) {
    app.config.globalProperties.$randomNumber = function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min
    }
  },
}
import randomString from './plugins/randomString'

app
  .use({
    install(app, options) {
      app.config.globalProperties.$myname = 'vfanlee'
    },
  })
  .use(randomNumber)
  .use(randomString)
//#endregion

app.use(router)

app.mount('#app')
