import { createApp } from 'vue'

import router from './router'

import App from './App.vue'
import VueECharts from './components/VueECharts/index.vue'

const app = createApp(App)
app.component('VueECharts', VueECharts)
app.use(router)
app.mount('#app')
