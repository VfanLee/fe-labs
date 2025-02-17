import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pc': resolve(__dirname, 'src/pages', 'pc'),
      '@mobile': resolve(__dirname, 'src/pages', 'mobile'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        pc: resolve(__dirname, 'pc.html'),
        mobile: resolve(__dirname, 'mobile.html'),
      },
    },
  },
})
