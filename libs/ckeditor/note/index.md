# CKEditor

## 初始化

```html
<textarea id="richtext"></textarea>

<script>
  function initRichText() {
    if (!self.editor) {
      CKEDITOR.config.customConfig = 'config_event.js' // 自定义配置
      CKEDITOR.lang.load(getCKEDITORLangCode(), 'zh-cn', function () {
        self.editor = CKEDITOR.replace('richtext', {
          language: getCKEDITORLangCode(),
        })
        self.editor.on('instanceReady', function (e) {
          console.log(e.editor.name + '加载完毕！')
          self.editor.setData() // 设置文本
        })
        contentEditor.on('change', function (e) {
          self.editor.getData() // 获取 HTML
          self.editor.document.$.body.textContent // 获取纯文本
        })
      })
    }
  }
  initRichText()
</script>
```

### 配置

```js
CKEDITOR.editorConfig = function (config) {
  config.extraPlugins =
    "font,sharedspace,image2,sourcedialog,quicktable,tableresize,colorbutton,imageUploader,simplelink,justify";
  config.toolbar = [
    [
      "Font", "FontSize", "Bold", "Italic", "Underline", "TextColor",
      "NumberedList", "BulletedList", "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock",
      "imageUploader", "Table", "Link", "Unlink",
      "RemoveFormat"
    ],
  ];
  config.sharedSpaces = {
    top: "rich-toolhook",
  };
  config.extraAllowedContent = "img[src,width,height];div(*);section(*);";
  // config.font_names = "微软雅黑;宋体;楷体;Arial;Tahoma;Times New Roman";
  // config.font_defaultLabel = "微软雅黑";
  config.fontSize_sizes = "14/14px;16/16px;20/20px;24/24px;28/28px;36/36px";
  config.fontSize_defaultLabel = "14";
  config.title = false;
  config.startupFocus = true;
  config.magicline_triggers = { section: 1 };
  config.pasteFromWordRemoveFontStyles = false;
  config.pasteFromWordRemoveStyles = false;
  config.qtWidth = "840px";
  config.enterMode = CKEDITOR.ENTER_P;
  config.forceSimpleAmpersand = true;
  config.colorButton_colorsPerRow = 4;
  config.removeFormatTags =
    "b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var,h1,h2,h3,h4,h5,h6";
  config.colorButton_colors =
    "D7D7D7,AEAEAE,444444,314767,EA5947,FF9900," +
    "CAAB70,5B88C5,A885CA,9EACDA";
  config.removeDialogTabs = "image:advanced;link:advanced";
};

```

## 问题记录

当在 bootstrap 模态框中初始化时，可能会遇到 input 输入框无法输入的问题，此时删除 `tabindex="-1"` 属性即可。

## 参考资料

- [CKEDITOR v4](https://ckeditor.com/docs/ckeditor4/latest/guide/index.html)
- [CKEDITOR v5](https://ckeditor.com/docs/ckeditor5/latest/getting-started/index.html)
