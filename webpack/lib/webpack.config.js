const path = require('path')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'MyLib',
  },
}
