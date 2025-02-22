import '@/styles/index.scss'

import { createApp } from 'vue'
import elementPlus from './plugins/element-plus'
import router from './router'

import App from './App.vue'
import Layout from '@/components/Layout/index.vue'

const app = createApp(App)
app.component('Layout', Layout)
app.use(elementPlus)
app.use(router)
app.mount('#app')
