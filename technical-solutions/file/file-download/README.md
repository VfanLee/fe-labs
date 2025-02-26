# 文件下载

在 JavaScript 中，有如下方法可以实现文件下载：

## 使用 `<a>` 标签

这是最简单、最直接的方法。HTML 的 `<a>` 标签具有 `download` 属性，当用户单击带有此属性的链接时，浏览器会将链接指向的文件下载到本地计算机。

但是如果 URL 返回 301 或 302 等重定向状态代码，浏览器会自动将请求重定向到新的 URL。浏览器不会触发 download 属性，因此不会将文件下载到本地计算机。

```html
<a href="https://example.com/file.txt" download="file.txt">下载文件</a>
```

```js
let a = document.createElement('a')
a.href = 'https://example.com/file.txt'
a.download = 'file.txt'
a.click()
```

## 使用 XMLHttpRequest

XMLHttpRequest 是一个旧的 Web API，用于在浏览器中进行 HTTP 请求。它也可以用于从服务器下载文件并将其保存到本地计算机。

```js
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://example.com/file.txt')
xhr.responseType = 'blob'
xhr.onload = function() {
  const blob = xhr.response
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'file.txt'
  a.click()
  URL.revokeObjectURL(url)
}
xhr.send()
```

## 使用 Fetch API

Fetch API 是一个现代的 Web API，用于在浏览器中进行 HTTP 请求。它可以用于从服务器下载文件并将其保存到本地计算机。

```js
fetch('https://example.com/file.txt')
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'file.txt'
    a.click()
    URL.revokeObjectURL(url)
  })
```

## 注意事项

- 在使用上述任何方法时，都必须确保服务器正确配置了 Content-Disposition 头。该头应包括 `filename` 参数，用于指定下载文件的名称。
- 如果要下载大文件，建议使用 Fetch API 或 XMLHttpRequest，因为它们可以提供下载进度信息。

以下是一些额外的提示：

- 可以使用 `saveAs()` 方法将文件保存到用户的指定位置。
- 可以使用 `Blob()` 构造函数创建 `Blob` 对象，该对象表示文件的数据。
- 可以使用 `URL.createObjectURL()` 方法将 `Blob` 对象转换为 `URL`，以便将其用作 `<a>` 标签的 `href` 属性的值。
- 可以使用 `URL.revokeObjectURL()` 方法撤销对 `URL` 对象的引用，以便释放资源。

## 使用 download.js

<https://www.npmjs.com/package/downloadjs>
