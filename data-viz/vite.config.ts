import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue'],
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@svg': fileURLToPath(new URL('./src/pages/svg', import.meta.url)),
      '@d3': fileURLToPath(new URL('./src/pages/d3', import.meta.url)),
    },
  },
  base: './',
  build: {
    rollupOptions: {
      input: {
        svg: 'svg.html',
        d3: 'd3.html',
      },
    },
  },
})
