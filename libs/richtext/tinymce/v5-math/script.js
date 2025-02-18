tinymce.init({
  selector: 'textarea#editor',
  toolbar: 'math iframe-simple',
  external_plugins: {
    'math': '/tinymce/plugins/math/plugin.js',
    'iframe-simple': '/tinymce/plugins/iframe-simple/plugin.js',
  },

  // content_langs: [
  //   { title: '简体中文', code: 'zh' },
  //   { title: 'English', code: 'en' },
  // ],
  // directionality: 'ltr',
  // language: 'en_US',
})
