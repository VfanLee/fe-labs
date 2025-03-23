// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    public: {
      apiBase: 'https://jsonplaceholder.typicode.com',
    },
  },
  css: ['@/assets/styles/reset.scss'],
  // https://cn.vitejs.dev/config
  vite: {},
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt'],
})
