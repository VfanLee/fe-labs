import '@/styles/index.scss'

import { createApp } from 'vue'
import router from './router'

import App from './App.vue'
import Layout from '@/components/Layout/index.vue'

const app = createApp(App)
app.component('Layout', Layout)
app.use(router)
app.mount('#app')
