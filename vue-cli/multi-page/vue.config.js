const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    pc: {
      entry: 'src/pages/pc/main.js',
      template: 'public/pc.html',
      filename: 'pc.html',
      title: '桌面端',
    },
    mobile: {
      entry: 'src/pages/mobile/main.js',
      template: 'public/mobile.html',
      filename: 'mobile.html',
      title: '移动端',
    },
  },
})
