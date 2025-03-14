module.exports = {
  plugins: {
    // https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#options
    'postcss-preset-env': {
      stage: 3,
      features: {},
    },
    // https://github.com/vkalinichev/postcss-rtl#options
    'postcss-rtl': {
      addPrefixToSelector(selector, prefix) {
        if (prefix === '[dir=rtl]') {
          return `html${prefix} ${selector}`
        } else {
          return selector
        }
      },
    },
  },
}
