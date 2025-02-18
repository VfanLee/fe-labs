;(function () {
  'use strict'

  tinymce.PluginManager.add('iframe-simple', function (editor, url) {
    editor.ui.registry.addIcon('frame', '')

    var _api = false

    var _urlDialogConfig = {
      title: 'Simple URL Dialog Demo',
      url: 'iframe-simple.html',
      buttons: [
        {
          type: 'custom',
          name: 'action1',
          text: 'Action Button 1',
          primary: true,
          align: 'end',
        },
        {
          type: 'custom',
          name: 'action2',
          text: 'Action Button 2',
          primary: false,
          align: 'end',
        },
        {
          type: 'cancel',
          name: 'cancel',
          text: 'Close Dialog',
          primary: false,
          align: 'end',
        },
      ],
      onAction(instance, trigger) {
        alert('You clicked ' + trigger.name)
      },
      width: 600,
      height: 300,
    }

    // Define the Toolbar button
    editor.ui.registry.addButton('iframe-simple', {
      text: 'Open Simple URL Dialog',
      icon: 'frame',
      onAction() {
        _api = editor.windowManager.openUrl(_urlDialogConfig)
      },
    })
  })
})()
