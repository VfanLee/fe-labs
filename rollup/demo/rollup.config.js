import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import del from 'rollup-plugin-delete'
import esbuild from 'rollup-plugin-esbuild'
import postcss from 'rollup-plugin-postcss'
import html from '@rollup/plugin-html'

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  plugins: [
    commonjs(),
    nodeResolve(),
    del({
      targets: ['dist/*'],
    }),
    postcss({
      extract: true,
      use: ['sass'],
      minimize: true,
    }),
    esbuild({
      minify: true,
    }),
    html({
      publicPath: '',
    }),
  ],
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: 'index-[hash].js',
    assetFileNames(assetInfo) {
      return 'assets/[name]-[hash][extname]'
    },
    manualChunks(id) {
      if (id.includes('node_modules')) {
        return 'vendor'
      }
    },
  },
}
