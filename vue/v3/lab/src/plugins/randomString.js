export default {
  install(app, options) {
    app.config.globalProperties.$randomString = function () {
      return (Math.random() + 1).toString(36).substring(7)
    }
  },
}
