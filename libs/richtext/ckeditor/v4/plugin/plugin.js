CKEDITOR.plugins.add('imageUploader', {
  lang: '',
  init: function (editor) {
    var dialogCommandName = 'imageUploader' + editor
    var a = {
      exec: function (editor) {
        console.log('imageAttach')
        console.log(editor)
        $('#' + editor.name).trigger('click')
        if ($('#' + editor.name)) {
          $('#' + editor.name).on('click', function (e) {
            e.stopPropagation()
          })
        }
      },
    }
    editor.addCommand(dialogCommandName, a)

    editor.ui.addButton &&
      editor.ui.addButton('imageUploader', {
        label: editor.lang.imageUploader.insertImage,
        command: dialogCommandName,
        toolbar: 'tools,1',
        icon: this.path + 'images/imageUploader.png',
      })

    require(['uploader'], function (Uploader) {})
  },
})
