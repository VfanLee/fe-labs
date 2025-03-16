/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": require("path").resolve(__dirname, "src"),
        "@play": require("path").resolve(__dirname, "src/pages/play"),
      },
    },
  },
  pages: {
    index: {
      entry: "src/pages/play/main.js",
      template: "src/pages/play/index.html",
      filename: "index.html",
      title: "Vue2 Play",
    },
  },
  // chainWebpack: (config) => {
  //   config.plugin("html").tap((args) => {
  //     args[0].title = "Vue2 Play";
  //     return args;
  //   });
  // },
};
