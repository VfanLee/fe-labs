const editor = document.querySelector('#editor')
const preview = document.querySelector('#preview')

const defaultText = `# H1
## H2
### H3
#### H4
##### H5
###### H6

**bold**
*italic*
~~strikethrough~~

[link](https://www.google.com)

\`inline code\`

\`\`\`
code block
\`\`\`

> blockquote
`

init()

function init() {
  editor.value = defaultText
  preview.innerHTML = marked.parse(defaultText)
}

editor.addEventListener('input', () => {
  preview.innerHTML = marked.parse(editor.value)
})
