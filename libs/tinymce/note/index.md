# Tinymce

## 安装

[Tinymce 核心](https://www.tiny.cloud/get-tiny/) ：

- 生产环境：<https://download.tiny.cloud/tinymce/community/tinymce_7.4.1.zip>
- 开发环境：<https://download.tiny.cloud/tinymce/community/tinymce_7.4.1_dev.zip>

> 或者通过 `npm install tinymce` 安装指定版本，然后手动从 `node_modules` 中复制出来。

## 国际化

1. 下载 [语言包](https://www.tiny.cloud/get-tiny/language-packages/)。
2. 将语言包（`langs`）放置于 `tinymce-path` 根目录下。
3. 指定 `language` 选项，默认为 `en`。

## Vue 组件

[安装 Vue 组件](https://www.tiny.cloud/docs/tinymce/latest/vue-cloud/)

```bash
# Vue3 安装 v4+
npm install "@tinymce/tinymce-vue@latest"

# Vue2 安装 v3
npm install "@tinymce/tinymce-vue@^3"
```

::: tip tinymce-script-src
`tinymce-vue` 组件是官方提供的组件，在使用 Web 框架集成 Tinymce 时，这个组件并不是必须的，亦或者自己封装一个编辑器（集成 Tinymce）也是可以的。

另外，tinymce-vue 可以通过 `api-key` 的方式加载（类似于 cdn 的方式加载），也可以通过 `tinymce-script-src` 的方式本地加载（更适合本地部署）。

再补充一点：其实 `tinymce-vue` 和 `tinymce` 的版本并不是固定关系，`tinymce-vue` 组件也是可以通过 `tinymce-script-src` 属性指定 tinymce v7（当前最高版本）的。
:::

[组件属性参考](https://www.tiny.cloud/docs/tinymce/latest/vue-ref/)

## 自定义插件开发

<https://www.ujcms.com/knowledge/707.html>

一些有用的配置：

- extended_valid_elements

一些 api

- insertContent 插入内容

## 参考资料

- [Tinymce v5](https://www.tiny.cloud/docs/tinymce/5/)
- [Tinymce v6](https://www.tiny.cloud/docs/tinymce/6/)
- [Tinymce v7(latest)](https://www.tiny.cloud/docs/tinymce/latest/)
