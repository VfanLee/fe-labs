import '@play/styles/index.scss'

import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

import App from './App.vue'
import Layout from '@play/components/Layout/index.vue'

const app = createApp(App)
app.component('Layout', Layout)
app.use(router)
app.use(createPinia())
app.mount('#app')
