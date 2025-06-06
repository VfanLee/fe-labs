import { createApp } from 'vue'
import i18n from './i18n'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(router)
app.mount('#app')
