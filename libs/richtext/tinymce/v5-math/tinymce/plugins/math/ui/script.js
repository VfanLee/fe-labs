window.MathJax = {
  options: {
    enableMenu: false,
  },
}

const source = document.querySelector('#source')
const preview = document.querySelector('#preview')

source.addEventListener('input', e => {
  const text = `${e.target.value}`
  preview.innerText = text
  window.MathJax?.typesetPromise?.([preview])
})

window.addEventListener('message', event => {
  const text = source.value

  window.parent.postMessage({
    mceAction: 'insertContent',
    content: text,
  })

  window.parent.postMessage({
    mceAction: 'close',
  })
})
