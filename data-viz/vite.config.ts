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
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@canvas': fileURLToPath(new URL('./src/pages/canvas', import.meta.url)),
      '@svg': fileURLToPath(new URL('./src/pages/svg', import.meta.url)),
      '@d3': fileURLToPath(new URL('./src/pages/d3', import.meta.url)),
      '@echarts': fileURLToPath(new URL('./src/pages/echarts', import.meta.url)),
    },
  },
  base: './',
  build: {
    rollupOptions: {
      input: {
        canvas: 'canvas.html',
        svg: 'svg.html',
        d3: 'd3.html',
        echarts: 'echarts.html',
      },
    },
  },
})
