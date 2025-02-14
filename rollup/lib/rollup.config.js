import { fileURLToPath, URL } from 'node:url'

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: fileURLToPath(new URL('src/index.js', import.meta.url)),
  output: {
    // dir: 'dist',
    file: 'dist/index.js',
    format: 'umd',
    name: 'MyLib',
  },
}
