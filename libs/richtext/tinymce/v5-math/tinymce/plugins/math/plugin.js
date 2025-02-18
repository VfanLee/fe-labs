;(function () {
  'use strict'

  var global$1 = tinymce.util.Tools.resolve('tinymce.util.I18n')
  var global$2 = tinymce.util.Tools.resolve('tinymce.Env')
  var global$3 = tinymce.util.Tools.resolve('tinymce.PluginManager')

  var openDialog = function () {
    tinymce.activeEditor.windowManager.openUrl({
      title: 'math',
      url: 'tinymce/plugins/math/ui/index.html',
      buttons: [
        {
          type: 'cancel',
          text: 'cancel',
          name: 'cancel',
          primary: false,
        },
        {
          type: 'custom',
          text: 'confirm',
          name: 'confirm',
          primary: true,
        },
      ],
      onAction(dialogApi, details) {
        console.log('onAction', dialogApi, details)

        if (details.name === 'confirm') {
          dialogApi.sendMessage({
            mceAction: 'insertContent',
            content: 'Some content',
          })
        }
      },
      onCancel(dialogApi) {
        console.log('onCancel', dialogApi)
      },
      onClose() {
        console.log('onClose')
      },
      onMessage(dialogApi, details) {
        console.log('onMessage', dialogApi, details)
      },
    })
  }

  var register = function (editor) {
    editor.ui.registry.addIcon(
      'math',
      '<svg viewBox="0 0 1280 1024" width="24" height="24"><path d="M1106.944 340.416h-448V414.72l242.688 222.976-242.688 223.04v74.304h448v-111.488h-261.312l186.624-185.856-186.624-185.792h261.312z"></path><path d="M546.88 127.68L546.752 128 1330.944 128v76.48H529.728L359.04 972.48H267.648c-23.232-61.376-47.168-120.96-71.808-178.688A6116.032 6116.032 0 0 0 119.68 622.72l-96.832 30.272L0 581.504l176.256-56.32 36.992 79.616a2801.92 2801.92 0 0 1 99.008 241.024l145.408-718.08h89.216z"></path></svg>',
    )
    editor.ui.registry.addButton('math', {
      icon: 'math',
      tooltip: 'math',
      onAction: openDialog,
    })
  }

  function Plugin() {
    global$3.add('math', function (editor, url) {
      register(editor)
    })
  }

  Plugin()
})()
