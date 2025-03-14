import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// element-plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// vuetify
import vuetify from 'vite-plugin-vuetify'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://cn.vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue'],
      dts: 'types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dirs: ['src/components'],
      deep: true,
      dts: 'types/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    vuetify({ autoImport: true }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@play': fileURLToPath(new URL('./src/pages/play', import.meta.url)),
      '@vuetify': fileURLToPath(new URL('./src/pages/vuetify', import.meta.url)),
      '@i18n': fileURLToPath(new URL('./src/pages/i18n', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        play: fileURLToPath(new URL('./index.html', import.meta.url)),
        // 'element-plus': fileURLToPath(new URL('./element-plus.html', import.meta.url)),
        vuetify: fileURLToPath(new URL('./vuetify.html', import.meta.url)),
        i18n: fileURLToPath(new URL('./i18n.html', import.meta.url)),
      },
    },
  },
})
